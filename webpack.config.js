const path = require('path');
const nodeExternal = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: {
    index: './index.ts'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extension: [
      '.tsx', '.ts', '.js'
    ]
  },
  externals: [nodeExternal()]
}
