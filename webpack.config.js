var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
	devtool: 'eval-source-map',
	entry: path.resolve(__dirname, 'app/index.jsx'),
	output: {
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	module: {

		loaders: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]

	},

	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.tmpl.html'
		}),

		new webpack.HotModuleReplacementPlugin(),

		new OpenBrowserPlugin({
			url: 'http://localhost:8080'
		})
	],

	devServer: {
		colors: true,
		historyApiFallback: true,
		inline: true,
		hot: true
	}
}