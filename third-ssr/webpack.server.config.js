/**
 Created by liuximing on 2017/10/22.
 ╭︿︿︿╮
 {/ o o /}
 ( (oo) )
 ︶︶︶
 **/
var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals')
var VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = {
	entry:'./entryServer.js',
	output:{
		path:path.resolve(__dirname,'./build'),
		publicPath:'./build/',
		filename:'build.js',
		libraryTarget:'commonjs2'
	},
	target:'node',
	devtool:'source-map',
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/
			}
		]
	},
	externals:nodeExternals({
		whitelist:/\.css$/
	}),
	plugins:[
		new VueSSRServerPlugin()
	]
}