const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  ESLintPlugin = require("eslint-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development",
  target = "web",
  pages = ["index", "catalog"];

if (process.env.NODE_ENV === "production") {
  mode = "production"
};

const plugins = [].concat(
  pages.map(
    (page) => 
      new HtmlWebpackPlugin({
        inject: true,
        favicon: "./src/images/favicon.ico",
        template: `./src/${page}.pug`,
        filename: `${page}.html`,
        chunks: [page],
      })
  ),
  [
    new ESLintPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ]
);

module.exports = {
  mode: mode,
  target: target,

  entry: pages.reduce((config, page) => {
    config[page] = `./src/${page}.js`;
    return config;
  }, {}),

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "public/[name][ext]",
    clean: true,
  },

  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },

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
        test: /\.(ico|png|svg|jpe?g|gif|webp)$/i,
        type: "asset",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
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
  plugins: plugins,
};
