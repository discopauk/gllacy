const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  ESLintPlugin = require("eslint-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");

let pages = ["index", "catalog"];

const plugins = [].concat(
  pages.map(
    (page) =>
      new HtmlWebpackPlugin({
        title: "Gllacy",
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

module.exports = (env, argv) => {
  return {
    mode: env.production ? "production" : "development",
    target: env.production ? "browserlist" : "web",
    devtool: env.production ? "sorce-map" : "eval-cheap-module-source-map",

    entry: pages.reduce((config, page) => {
      config[page] = `./src/${page}.js`;
      return config;
    }, {}),

    output: {
      assetModuleFilename: "public/[name][ext][query]",
      clean: true,
    },

    devServer: {
      contentBase: "./dist",
      hot: true,
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
      minimize: argv.mode === "production",
      moduleIds: "named",
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
            argv.mode === "production"
              ? MiniCssExtractPlugin.loader
              : "style-loader",
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ],
        },
      ],
    },
    plugins: plugins,
  };
};
