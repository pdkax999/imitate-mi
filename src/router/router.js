import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home/Home.vue";
import Index from "../pages/Home/children/Index.vue";
import Product from "../pages/Home/children/Product.vue";
import Detail from "../pages/Home/children/Detail.vue";
import Login from "../pages/Login/Login.vue";
import Order from "../pages/Order/Order.vue";
import Cart from "../pages/Cart/Cart.vue";
import Register from "../pages/Register/Register.vue";
import Confirm from "../pages/Order/children/Confirm.vue";
import Test from "../pages/test/Test.vue";


Vue.use(VueRouter)


export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/',
      name: 'home',
      redirect:'/index',
      component:Home,
      children:[
        {
          path:'/index',
          name: 'index',
          component:Index
        },
        {
          path:'/product/:id',
          name: 'product',
          props:true,
          component:Product
        },
        {
          path:'/detail/:id',
          name: 'detail',
          props:true,
          component:Detail
        },
      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/order',
      name:'order',
      component:Order,
      children:[{
       path:'confirm',
       name:'confirm',
       component:Confirm,       
      }]
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/test',
      name:'test',
      component:Test
    },
   
  ]
})

