const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    assetModuleFilename: "public/[name][ext]",
    clean: true,
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  target: "web",
  optimization: {
    moduleIds: "deterministic",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Gllacy",
      filename: "index.html",
      favicon: "./src/images/favicon.ico",
      template: "./src/index.pug",
    }),
    new HtmlWebpackPlugin({
      title: "Gllacy",
      filename: "catalog.html",
      favicon: "./src/images/favicon.ico",
      template: "./src/catalog.pug",
    }),
    new HtmlWebpackInlineSVGPlugin(),
    new ESLintPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.pug$/i,
        loader: "pug-loader",
      },
      {
        test: /\.(ico|png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer"]],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              additionalData: `@import "variables.scss";`,
            },
          },
        ],
      },
    ],
  },
};
