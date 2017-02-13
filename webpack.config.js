var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./src/index.js'
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/static/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			include: __dirname,
			loader: 'babel'
		}]
	}
};
