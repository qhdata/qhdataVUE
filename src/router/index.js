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
            path: '/',
            redirect: '/home',
        },
        {
            path: '*',
            redirect: '/home',
        },
    ],
});
