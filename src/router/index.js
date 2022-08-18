
import VueRouter from 'vue-router'
import Home from '../views/Home'


const routes = [
    {
        path:'/home',
        name:'Home',
        component: Home, //只能有一个 
    }
]

const router = new VueRouter({
    mode:'history',
    routes,
})

export default router
