var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
	devtool: 'eval-source-map',
	entry: path.resolve(__dirname, 'app/index.js'),
	output: {
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
		}]

	},

	plugins: [
		// html 模板插件
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.tmpl.html'
		}),
		
		// 热加载插件
		new webpack.HotModuleReplacementPlugin(),
		
		// 打开浏览器
		new OpenBrowserPlugin({
			url: 'http://localhost:8080'
		})
	],

	devServer: {
		//colors: true, //终端中输出结果为彩色 webpack3-CLI only使用命令行参数执行即可
		historyApiFallback: true, //不跳转
		inline: true,  //实时刷新
		hot: true  // 使用热加载插件 HotModuleReplacementPlugin
	}
}