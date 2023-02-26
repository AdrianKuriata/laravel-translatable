import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/translations',
        component: () => import('@app/views/layout/Layout.vue'),
        redirect: '/translations',
        children: [
            {
                path: '/',
                name: 'translations.index',
                component: () => import('@app/views/translations/Index.vue')
            },
            {
                path: '/deleted_translations',
                name: 'deleted_translations.index',
                component: () => import('@app/views/deleted_translations/Index.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'text-blue-800 font-bold'
})

export default router
