<template>
    <h1 class="main_content">
        首页
    </h1>
</template>
<script>
    import { mapState, mapMutations } from 'vuex';
    // import http from '../../service/http';
    // import { SELF_INFO, LOGOUT } from '../../service/inter';

    export default {
        data() {
            return {};
        },
        computed: {
            ...mapState([
                'userInfo',
            ]),
        },
        methods: {
            ...mapMutations([
                'setUserInfo',
            ]),
        },
    };
</script>
<style lang="less" scoped>

</style>
