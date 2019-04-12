import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
	state: {
		width:"200px",
		show:true,
		
	},
	getters: {
		getNavTitle(state) {
			return state.navTitle
		}
	},
	mutations: {
		setWidth(state, list){
			state.width = list
		},
		
		
	},
	actions: {
		
	}
})
export default store
