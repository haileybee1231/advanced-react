var path = require('path');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
	entry: `${SRC_DIR}/index.js`,
	output: {
		filename: 'bundle.js',
		path: DIST_DIR,
		publicPath: '/'
	},
	node: {
		fs: "empty"
	},
	resolve: { extensions: ['.js', '.jsx', '*'] },
	module: {
		rules: [
			{
				test: /\.jsx?/,
				include: SRC_DIR,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['react'],
				},
			},
		]
	},
	devServer: {
		historyApiFallback: true  // serves up main page for react-router to work with redux
	}
};