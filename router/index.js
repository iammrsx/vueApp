import { createWebHashHistory, createRouter } from "vue-router";
import Home from '../components/view/Home.vue';
import Users from '../components/view/Users.vue';

const route = [
    {
        path:'/',
        name : 'home',
        component : Home
    },
    {
        path:'/:username',
        name : 'userdetails',
        component : Users
    }
]
const router = new createRouter({
    history:createWebHashHistory(),
    routes:route
})

export default router;