const path = require("path");

module.exports = {
  mode: "development",
  // Entry point: starting from src/index.js, Webpack will include all dependencies from here
  entry: "./src/index.js",

  // Output configuration: where to place the bundled output
  output: {
    filename: "main.js",
    path: path.resolve(__dirname),
  },

  // Configuration for the development server
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 8080,
  },

  module: {
    rules: [
      // You can add rules for processing different types of files.
      // As an example, if you wanted to add Babel for JS transpilation,
      // or CSS loaders to process your CSS files, you'd do it here.
    ],
  },
};
