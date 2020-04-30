import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/list.vue'
import ListByCategory from '../views/ListByCategory.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'list',
        component: List
    },
    {
        // path: '/menu',
        // name: 'menu',
        // component: ListByCategory
        path: '/menu/:categorySelected',
        name: 'menu',
        component: ListByCategory
    }
]

const router = new VueRouter({
    mode: 'history',
    // mode history to remove # on url
    // to set view we want to use, just added on route
    routes
})

export default router
