const path = require('path');
const environment = process.env.NODE_ENV;
const configs {
	dev: {},
	qa: {},
	prod: {}
}

module.exports = (env = {}) => {
	return {
		entry: [
			'babel-polyfill',
			'./src/index.js',
		],
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist')
		},
		devtool: 'source-map',
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
