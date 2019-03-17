import Vue from 'vue'
import Router from 'vue-router'
import Index from "../page/Index"
import Login from "../page/Login"
import Register from "../page/Register"
import start from "../page/start"
import myWorld from "../page/myWorld"
import businessCollege from "../page/businessCollege"
import shoppingMall from "../page/shoppingMall"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/index",
      name:'Index',
      component: Index
      // children:{
      //   path:"/myWorld",
      //   component: myWorld
      // }
    },
    {
      path:"/Login",
      name:'Login',
      component: Login
    },
    {
      path:"/Register",
      name:'Register',
      component: Register
    },
    {
      path:"/myWorld",
      name:'myWorld',
      component: myWorld
    },
    {
      path:"/",
      name:'businessCollege',
      component: businessCollege
    },
    {
      path:"/shoppingMall",
      name:'shoppingMall',
      component: shoppingMall
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})
