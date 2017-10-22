/**
 Created by liuximing on 2017/10/22.
 ╭︿︿︿╮
 {/ o o /}
 ( (oo) )
 ︶︶︶
 **/
// vue
const vue = require('vue');
const main = new vue({
	template : '<div>Hello vue</div>'
})

//ssr
const renderer  = require('vue-server-renderer').createRenderer({
	template:require("fs").readFileSync('./index.template.html','utf-8')
})
renderer.renderToString(main,(err,html) => {
	if(err) throw err
	console.log(html);
});
