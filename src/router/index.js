/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: resolve => require(['@/pages/home/main'], resolve),
        },
        {
            path: '/icon',
            component: resolve => require(['@/pages/icon/main'], resolve),
            children: [
                {
                    path: 'icon-preview',
                    components: resolve => require(['@/pages/icon/iconPreview'], resolve),
                },
            ],
        },

        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '*',
            redirect: '/home',
        },
    ],
});
