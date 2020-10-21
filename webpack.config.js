/* eslint-disable comma-dangle */
const path = require('path');

module.exports = {
  entry: './source/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)?$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs/'),
    port: 9000,
    open: true,
    publicPath: 'http://localhost:9000/',
    hotOnly: true,
    historyApiFallback: true
  }
};