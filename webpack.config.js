var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
	devtool: 'eval-source-map',
	entry: path.resolve(__dirname, 'app/index.jsx'),
	output: {
		publicPath: '/',
		filename: 'bundle.js'
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
		// html 模板插件
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.html'
		}),

		new ExtractTextPlugin('[name].css'),

		// 热加载插件
		new webpack.HotModuleReplacementPlugin()

		// // 打开浏览器
		// new OpenBrowserPlugin({
		// 	url: 'http://localhost:8080'
		// })
	]

	// devServer: {
	// 	proxy: {
 //          // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
 //          // koa 代码在 ./mock 目录中，启动命令为 npm run mock
 //        '/api': {
 //            target: 'http://localhost:3000',
 //            secure: false
 //          }
 //        },
	// 	//colors: true, //终端中输出结果为彩色 webpack3-CLI only使用命令行参数执行即可
	// 	historyApiFallback: true, //不跳转
	// 	inline: true, //实时刷新
	// 	hot: true // 使用热加载插件 HotModuleReplacementPlugin
	// }
}