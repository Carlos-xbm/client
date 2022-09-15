var path = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, "public"),
    hot: true,
  },
  mode: "production",
};
