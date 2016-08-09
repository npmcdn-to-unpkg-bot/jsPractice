var path = require("path");

const webpack = require("webpack");

module.exports = {
	entry : "./entry.js",

	output : {
		path : path.join(__dirname, "/dist"),
		filename : "bundle.js"
	},

	resolve : {
		extensions : ["", ".js", ".jsx"]
	},

	module : {
		loaders : [
			{
				test : /\.js|jsx$/,
				exclude : /node_modules/,
				loaders : ["babel"] 
			},
			{
				test : /\.css$/,
				loaders : ["style", "css"]
			}
		]
	},

	plugins : [
		new webpack.optimize.UglifyJsPlugin({
			compress : {
				warnings : false,
			},
			output : {
				comments : false,
			},
		}),
	]

}