/**
 Created by liuximing on 2017/10/22.
 ╭︿︿︿╮
 {/ o o /}
 ( (oo) )
 ︶︶︶
 **/
import Vue from 'vue'
import Page from './page/page.vue'

export  function createApp() {
	const app = new Vue({
		render:h =>h(Page)
	})
	return {app}
}