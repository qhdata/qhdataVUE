import Vue from 'vue';
import Vuex from 'vuex';
// import testReview from './modules/testReview';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userInfo: {},
    },
    getters: {
        curPosition: state => state.curPosition,
    },
    mutations: {
        setUserInfo(state, info) {
            state.userInfo = info;
        },
    },
    modules: {

    },
    // 开发版本
    strict: process.env.NODE_ENV === 'development',
});
if (module.hot) {
    module.hot.accept([
        // './modules/testReview',
    ], () => {
        // const testReview = require('./modules/testReview').default;
        // store.hotUpdate({
        //     modules: {
        //         testReview
        //     },
        // })
    });
}
export default store;
