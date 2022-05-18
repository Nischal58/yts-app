import { createRouter,createWebHistory } from "vue-router";
import Home from '../Home.vue'
import about from '../about.vue'

const routes =[
    {
        path:'/',
        name:'HomeList',
        component:Home

    },
    {
        path:'/about',
        name:'AboutList',
        component:about

    },
   
   

]

const router = createRouter({
    history:createWebHistory(process.env.BAsE_URL),
    routes
})

export default router