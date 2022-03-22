import {createRouter, createWebHashHistory} from 'vue-router'

// 1. 定义路由组件
const Home = {template: '<div>Home</div>'}
import Clock from '../views/demo/Clock.vue'

// 2. 定义一些路由
const routes = [
    {
        name: 'Demo',
        path: '/',
        component: ()=> import('../views/demo/index.vue')
    },
    {
        name: 'Counter',
        path: '/demo/counter',
        component: ()=> import('../views/demo/Counter.vue')
    },
    {
        name: 'Clock',
        path: '/demo/clock',
        component: ()=> import('../views/demo/Clock.vue')
    },
    {
        name: 'GridTest',
        path: '/demo/gridtest',
        component: ()=> import('../views/demo/GridTest.vue')
    }
]

// 3. 创建路由实例并传递 `routes` 配置
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    strict: true,
})