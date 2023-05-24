import Layout from '@/components/Layout/Layout'
const routeMap = [
    {
        path: '/backhome',
        component: Layout,
        name: 'backhome',
        redirect: '/backhome/home',
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/components/page/home'),
                meta: { title: '首页' }
            },
            {
                path: 'login',
                name: 'login',
                component: () => import('@/components/page/login'),
                meta: { title: '登录' }
            },
            {
                path: 'userinfo',
                name: 'userinfo',
                component: () => import('@/components/page/userinfo'),
                meta: { title: '用户信息' }
            },
            {
                path: 'friends',
                name: 'friends',
                component: () => import('@/components/page/friends'),
                meta: { title: '与好友一起' }
            },
            {
                path: 'subscribe',
                name: 'subscribe',
                component: () => import('@/components/page/subscribe'),
                meta: { title: '订阅' }
            },
            {
                path: 'aftersales',
                name: 'aftersales',
                component: () => import('@/components/page/aftersales'),
                meta: { title: '售后支持' }
            },
            {
                path: 'luckdraw',
                name: 'luckdraw',
                component: () => import('@/components/page/luckdraw'),
                meta: { title: '抽奖' }
            },
            // {
            //     path: 'wish',
            //     name: 'wish',
            //     component: () => import('@/components/page/wish'),
            //     meta: { title: '许愿' }
            // },
            {
                path: 'help',
                name: 'help',
                component: () => import('@/components/page/help'),
                meta: { title: '帮助中心' }
            },
            {
                path: 'helpdetail',
                name: 'helpdetail',
                component: () => import('@/components/page/helpdetail'),
                meta: { title: '帮助中心' }
            },
            {
                path: 'excode',
                name: 'excode',
                component: () => import('@/components/page/excode'),
                meta: { title: '兑换码' }
            },

        ]
    },
    {   name: '404',
        path: '/404',
        hidden: true,
        component: () => import('@/views/404'),
    },
    {
        name: '403',
        path: '/403',
        hidden: true,
        component: () => import('@/views/403'),
    },
    {
        path: '*', redirect: '/404', hidden: true
    }
]
export default routeMap;
