import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import wode from "../pages/wode"
import faxian from "../pages/faxian"
import diange from "../pages/diange"
import guanzhu from "../pages/guanzhu"
import xiaoxi from "../pages/xiaoxi"
import banzou from "../pages/banzou"
import haoyou from "../pages/haoyou"
import fujin from "../pages/fujin"
import tuijian from "../pages/tuijian"
import dangqian from "../pages/dangqian"
import bang from "../pages/bang"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:guanzhu
     },
    {
      path:'/wode',
      name:"wode",
      component:wode
    },
    {
      path:'/faxian',
      name:"faxian",
      component:faxian
    },
    {
      path:'/diange',
      name:"diange",
      component:diange
    },
    {
      path:'/guanzhu',
      name:"guanzhu",
      component:guanzhu
    },
    {
      path:'/xiaoxi',
      name:"xiaoxi",
      component:xiaoxi
    },
    {
      path:'/banzou',
      name:"banzou",
      component:banzou
    },
    {
      path:'/haoyou',
      name:"haoyou",
      component:haoyou
    },
    {
      path:'/fujin',
      name:"fujin",
      component:fujin
    },
    {
      path:'/tuijian',
      name:"tuijian",
      component:tuijian
    },
    {
      path:'/dangqian',
      name:"dangqian",
      component:dangqian
    },
    {
      path:'/bang',
      name:"bang",
      component:bang
    }
  ]
})
