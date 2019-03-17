import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login'
import Register from "../pages/register"
import Indexs from "../pages/indexs"
import Room from "../pages/room"
import RoomIntro from "../pages/roomIntro"
import RoomPlus from "../pages/roomPlus"
import refinement from "../pages/refinement"
import collections from "../pages/collections"
import help from "../pages/help"
import moreroom from "../pages/moreroom"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/',
      component:Indexs
    },
    {
      path:'/room',
      component:Room
    },
    {
      path:'/roomintro',
      component:RoomIntro
    },
    {
      path:'/roomplus',
      component:RoomPlus
    },
    {
      path:'/refinement',
      component:refinement
    },
    {
      path:'/collections',
      component:collections
    },
    {
      path:'/help',
      component:help
    },
    {
      path:'/moreroom',
      component:moreroom
    }
  ]
})
