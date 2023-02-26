<template>
    <v-alert v-model="show" :text="text" border="top" :border-color="type" elevation="2" class="fixed-alert"></v-alert>
</template>

<script>
import {inject, onMounted, ref} from "vue";

export default {
    setup() {
        const show = ref(false)
        const type = ref('success')
        const text = ref(null)
        const $eventListen = inject('$eventListen')
        onMounted(() => {
            $eventListen('notify', (e) => {
                if (!show.value && e.detail.message) {
                    const delay = e.detail.hasOwnProperty('delay') ? e.detail.delay : 5000
                    show.value = true
                    text.value = e.detail.message
                    type.value = e.detail.type

                    setTimeout(() => {
                        show.value = false
                    }, delay)
                }
            })
        })

        return {
            show,
            type,
            text
        }
    }
}
</script>

<style lang="scss" scoped>
.fixed-alert {
    @apply container;
    @apply z-10;
    @apply fixed;
    bottom: 20px;
}
</style>
