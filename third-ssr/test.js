/**
 Created by liuximing on 2017/10/22.
 ╭︿︿︿╮
 {/ o o /}
 ( (oo) )
 ︶︶︶
 **/

var express = require('express');
var app = express();
// vue
const vue = require('vue');
const serverBundle = require('./build/vue-ssr-server-bundle.json')
//ssr
const renderer  = require('vue-server-renderer').createBundleRenderer(serverBundle,{
	runInNewContext:false,
	template:require("fs").readFileSync('./index.template.html','utf-8')
})
const context = {
	title: '这是一个关于ssr的例子',
	meta:`
		 <meta name="keyword" content="vue srr"/>
         <meta name="author" content="哈哈哈" />
	`
}
app.get('/', function (req, res) {
	const context = {url:req.url}
	renderer.renderToString(context,(err,html) => {
		if(err) throw err
		res.send(html);
	});

});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});