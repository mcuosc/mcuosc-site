import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import AboutPage from '/src/components/AboutPage.vue'
import LinksPage from '/src/components/LinksPage.vue'
import upMCU from '/src/components/upMCU.vue'
import JoinUsPage from '/src/components/JoinUsPage.vue'

let history = createWebHistory()
let routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage,
    },
    {
        path: '/links',
        name: 'Links',
        component: LinksPage,
    },
    {
        path: '/upMCU',
        name: 'upMCU',
        component: upMCU,
    },
    {
        path: '/join',
        name: 'Join',
        component: JoinUsPage,
    },
]

export default createRouter({ history, routes })