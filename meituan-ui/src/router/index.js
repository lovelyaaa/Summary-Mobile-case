import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from "../pages/index"
import Shop from "../pages/shop"
import Find from "../pages/find"
import Myself from "../pages/myself"
import MyselfNone from "../pages/myselfNone"
import Order from "../pages/order"
import OrderNone from "../pages/orderNone"
import MyOrder from "../pages/myOrder"

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: "/Index",
      name: "Index",
      component: Index
    },
    {
      path: "/Find",
      name: "Find",
      component: Find
    },
    {
      path: "/Shop",
      name: "Shop",
      component: Shop
    },
    {
      path: "/myself",
      name: "Myself",
      component: Myself
    },
    {
      path: "/MyselfNone",
      name: "MyselfNone",
      component: MyselfNone
    },
    {
      path: "/Order",
      name: "Order",
      component: Order
    },
    {
      path: "/orderNone",
      name: "OrderNone",
      component: OrderNone
    },
    {
      path: "/myorder",
      name: "MyOrder",
      component: MyOrder
    }
  ]
})
