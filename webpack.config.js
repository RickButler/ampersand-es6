const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env = {}) => {
	return {
		entry: [
			'babel-polyfill',
			'./src/index.js',
		],
		plugins: [
			new CleanWebpackPlugin(['dist']),
			new HtmlWebpackPlugin({
				title: 'Output Management'
			}),
		],
		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, 'dist')
		},
		devtool: 'inline-source-map',
		devServer: {
			contentBase: './dist'
		},
		module: {
			rules: [{
				test: /\.less$/,
				use: [{
					loader: "style-loader"
				}, { 
					loader: "css-loader"
				},{
					loader: "less-loader",
						options: { sourceMap: true }
					}]
				}]
			}
		}
};
