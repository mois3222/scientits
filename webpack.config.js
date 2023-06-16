const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      template: "/public/index.html",
      filename: "./index.html",
    }),

    new CopyWebpackPlugin({
      patterns: [{ from: "./src/styles/styles.css", to: "" }],
    }),
  ],
};
