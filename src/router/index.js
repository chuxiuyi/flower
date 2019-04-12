import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/pages/home/index'
import ClassificationIndex from '@/pages/classification/index'
import ShoppingIndex from '@/pages/shopping/index'
import MineIndex from '@/pages/mine/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
			redirect: "/home",
    },
		{
		  path: '/home',
		  name: 'HomeIndex',
		  component: HomeIndex
		},
		{
		  path: '/classification',
		  name: 'ClassificationIndex',
		  component: ClassificationIndex
		},
		{
		  path: '/shopping',
		  name: 'ShoppingIndex',
		  component: ShoppingIndex
		},
		{
		  path: '/mine',
		  name: 'MineIndex',
		  component: MineIndex
		},
  ]
})

// 
// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Login from '@/components/Login'
// 
// 
// Vue.use(Router)
// 
// var r = new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'login',
//       redirect: "/login"
//     },
// 		{
// 		  path: '/login',
// 		  name: 'login',
// 		  component: Login
// 		},
// 	
//   ]
// })
// 
// 
// //router定义的下面, 每个路由跳转之前, 执行回调函数
// r.beforeEach((to, from, next) => {
//   // console.log("beforeEach");
//   // console.log("\tfrom.path=" + from.path);
//   // console.log("\tto.path=" + to.path);
// 
//   console.log("beforeEach")
// 
//   //如果不是登陆界面
//   var isShowLogin = false
//   if (to.path != "/login") {
//     //检测是否登陆
//     if(localStorage.isLogin == undefined || localStorage.isLogin != 1){
//       
//       isShowLogin = true
//     }
//   }
// 	
// 	if(isShowLogin == true){
// 		r.push("/login")
// 	}else{
// 		next();
// 	}
// 	
// });
// export default r;