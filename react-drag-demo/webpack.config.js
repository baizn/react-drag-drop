var webpack = require('webpack');

module.exports = {
	entry: ['babel-polyfill', './app.js'],
	output: {
		path: __dirname + '/build/',
		publicPath: '/build/',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					plugins: ['transform-runtime', 'transform-decorators-legacy'],
					presets: ['es2015', 'stage-0', 'react']
				}
			}
		]
	}
}