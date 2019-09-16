const path = require("path");
module.exports = {
  entry: "./source/app.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "snapterest.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'build')
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
              plugins: ["transform-class-properties"]
            }
          }
        ],
        exclude: path.resolve(__dirname, "node_modules")
      }
    ]
  }
};
