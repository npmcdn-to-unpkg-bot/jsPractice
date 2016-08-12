var path = require("path");

const webpack = require("webpack");

module.exports = {
	entry : "./entry.jsx",

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
				loader : "babel",
				query : {
					presets : ["react","es2015"]
				}
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
		new webpack.DefinePlugin({
			"process.env": { 
			NODE_ENV: JSON.stringify("production") 
			}
		}),
	]

}