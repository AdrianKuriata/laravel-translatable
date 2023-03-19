<template>
    <router-view></router-view>
</template>
<script>
import {useStore} from "vuex";
export default {
    name: 'App',
    setup() {
        const store = useStore()

        store.dispatch('config/getConfig')
    }
}
</script>
