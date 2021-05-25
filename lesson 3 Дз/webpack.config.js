const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")

const isDevelopment = process.env.NODE_ENV === "development"

const getFileName = (ext = "[ext]", name = "[name]") => {
  return isDevelopment ? `${name}.${ext}` : `${name}.[contenthash].${ext}`
}

module.exports = {
  mode: process.env.NODE_ENV || "development",
  context: path.resolve(__dirname, "src"),
  entry: {
    app: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  optimization: isDevelopment
    ? {}
    : { minimize: true, minimizer: [new OptimizeCssAssetsWebpackPlugin()] },
  plugins: [
    new HtmlWebpackPlugin({
      title: "messenger",
      template: path.resolve(__dirname, "public/index.html"),
      inject: true,
      minify: {
        removeComments: !isDevelopment,
        removeAttributeQuotes: !isDevelopment,
      },
    }),
    new MiniCssExtractPlugin({
      filename: `./css/${getFileName("css")}`,
      chunkFilename: getFileName("css", "[id]"),
      ignoreOrder: false,
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [/node_modules/, /\.module\.css$/],
        use: [
          isDevelopment
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: path.resolve(__dirname, "dist/css"),
                },
              },

          {
            loader: "css-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.module\.css$/,
        exclude: /node_modules/,
        use: [
          isDevelopment
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: path.resolve(__dirname, "dist/css"),
                },
              },

          {
            loader: "css-loader",
            options: {
              sourceMap: isDevelopment,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"],
    alias: {
      "@app": path.resolve(__dirname, "src/"),
      "@store": path.resolve(__dirname, "src/store/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    hot: true,
    port: 3000,
  },
  devtool: isDevelopment ? "source-map" : false,
}
