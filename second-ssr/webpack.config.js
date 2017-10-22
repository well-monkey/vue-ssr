/**
 Created by liuximing on 2017/10/22.
 ╭︿︿︿╮
 {/ o o /}
 ( (oo) )
 ︶︶︶
 **/
var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry:'./entryClient.js',
	output:{
		path:path.resolve(__dirname,'./dist'),
		publicPath:'./dist/',
		filename:'build.js'
	},
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
	}
}