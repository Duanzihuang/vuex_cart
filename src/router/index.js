import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) //Vue.propertype.$route = xxx Vue.propertype.$router = xxx

import GoodsList from '../components/GoodsList'
import Cart from '../components/Cart'

const router =  new VueRouter({
    routes:[
        {
            path:'/',redirect:'/goodslist'
        },
        {
            path:'/goodslist',component:GoodsList
        },
        {
            path:'/cart',component:Cart
        }
    ]
})

export default router