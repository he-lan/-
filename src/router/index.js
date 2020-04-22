import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    mode: 'history', //使用路由的history模式去掉url中的"#""
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        }
        // {
        //     path: '/',
        //     name: 'HelloWorld',
        //     redirect: '/home'
        // }
    ]
})