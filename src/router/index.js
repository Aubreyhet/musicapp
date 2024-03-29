// 路由-相关模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Play from '@/views/Play'
import Hotlist from '@/views/Hotlist'
import Songsheet from '@/views/Songsheet'


Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/layout'
    },
    {
        path: '/layout',
        component: Layout,
        redirect: '/layout/home',
        children: [
            {
                path: 'home',
                component: Home,
                meta: { // meta保存路由对象额外信息的
                    title: "首页"
                }
            },
            {
                path: 'search',
                component: Search,
                meta: {
                    title: "搜索"
                }
            },
            {
                path: 'hotlist',
                component: Hotlist,
                meta: {
                    title: "热歌榜"
                }
            }
        ]
    },
    {
        path: '/play',
        component: Play,
        // query:{
        //     id
        // }
    }
    ,
    {
        path: '/songsheet',
        component: Songsheet
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router

