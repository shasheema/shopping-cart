import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import NavBar from '../components/NavBar'
import Shop from "../components/Shop";
import Product from "../components/Product";
import Cart from "../components/Cart"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Shop',
            component: Shop
        },
        {
            path: '/hello',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/product/:id',
            name: 'product',
            component: Product
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: Cart
        },

    ]
})
