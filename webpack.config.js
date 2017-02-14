var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./src/index.js',
		'./src/styles/main.scss'
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/static/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('styles.css', {
			allChunks: true
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: __dirname,
				loader: 'babel'
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
				test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
				loader: 'file-loader'
			}
		]
	}
};
