const path = require('path');

const web = {
  target: 'web',
  entry: './index.ts',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'reinforce-browser.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
};

const node = {
  ...web,
  target: 'node',
  output: {
    filename: 'reinforce.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  }
};

module.exports = [web, node];
