var path = require("path")
var webpack = require('webpack')

module.exports = {
  context: __dirname,

  entry: {
    // Add as many entry points as you have container-react-components here
    App1: './reactjs/App1',
    vendors: ['react'],
  },

  output: {
      path: path.resolve('./personal_page/static/bundles/local/'),
      filename: "[name]-[hash].js"
  },

  externals: [
  ], // add all vendor libs

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ], // add all common plugins here

  module: {
    loaders: [], // add all common loaders here
    rules: {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ],
      include: /node_modules/
    }
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}
