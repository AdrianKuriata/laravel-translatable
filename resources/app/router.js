import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/translations',
        component: () => import('./views/layout/Layout.vue'),
        redirect: '/translations',
        children: [
            {
                path: '/',
                component: () => import('./views/translations/Index.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
