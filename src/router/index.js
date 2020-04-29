import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/list.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'list',
        component: List
    }
]

const router = new VueRouter({
    mode: 'history',
    // mode history to remove # on url
    // to set view we want to use, just added on route
    routes
})

export default router
