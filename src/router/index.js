import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import ServiceDetail from '../views/ServiceDetail.vue'
import Location from '../views/Location.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/sobre', name: 'About', component: About },
    { path: '/servicos', name: 'Services', component: Services },
    { path: '/servicos/:slug', name: 'ServiceDetail', component: ServiceDetail },
    { path: '/localizacao', name: 'Location', component: Location },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})

export default router
