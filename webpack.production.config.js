var pkg = require('./package.json')
var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/index.jsx')
    // 将 第三方依赖（node_modules中的） 单独打包
    // vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].[chunkhash:8].js"
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract([ 'css-loader', 'less-loader' ])
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract([ 'css-loader', 'postcss-loader' ])
      }, {

        test: /\.(png|gif|jpg|jpeg|bmp)$/i,
        loader: 'url-loader?limit=5000'
          // 限制大小5kb
      }]
  },

  plugins: [
    new CleanWebpackPlugin(['build'],{
      root:path.resolve(__dirname, './')
    }),
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin("Copyright by wangfupeng1988@github.com."),

    // html 模板插件
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html'
    }),

    // 分离CSS和JS文件
    new ExtractTextPlugin('[name].[chunkhash:8].css'),

    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: '[name].[chunkhash:8].js'
    })
  ]
}