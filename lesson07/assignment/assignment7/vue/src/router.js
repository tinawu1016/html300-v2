import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
// import App from './App.vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Top-3 from './components/Top-3.vue'
import Menu from './components/menu.vue'
import Contact from './components/contact-us.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/top-3',
            name: 'top-3',
            component: Top-3
        },
        {
            path: '/menu',
            name: 'menu',
            component: Menu
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: Contact Us
        }
    ]
})
