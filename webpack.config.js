const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = {
  entry: './src/index.tsx',
 
  output: {
    path: path.resolve('public'),
    publicPath: "/public/",
    filename: 'bundle.js'
  },
  devtool: "source-map",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' },
      { test: /\.tsx$/, loader: 'awesome-typescript-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ],
  },
  plugins: [
    new Dotenv()
  ]
}