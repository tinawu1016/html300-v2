import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
// import App from './App.vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Top from './components/top.vue'
import Menu from './components/menu.vue'
import Contact from './components/contact.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/top',
            name: 'top',
            component: Top
        },
        {
            path: '/menu',
            name: 'menu',
            component: Menu
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})
