<template>
    <v-alert v-model="show" border="top" :border-color="type" elevation="2" class="fixed-alert">
        {{ text }}
        <div class="flex justify-end items-center mt-2">
            <v-btn color="error" @click="$emit('cancel', {type: 'cancel', data: data}); show = false" class="mr-1">
                Disagree
            </v-btn>
            <v-btn color="success" @click="$emit('success', {type: 'success', data: data}); show = false">
                Agree
            </v-btn>
        </div>
    </v-alert>
</template>

<script>
import {onMounted, ref, inject} from "vue";

export default {
    setup() {
        const show = ref(false)
        const type = ref('error')
        const text = ref(null)
        const data = ref({})
        const $eventListen = inject('$eventListen')
        onMounted(() => {
            $eventListen('notify-confirmation', (e) => {
                if (!show.value && e.detail.message) {
                    show.value = true
                    text.value = e.detail.message
                    type.value = e.detail.type
                    data.value = e.detail.data
                }
            })
        })

        return {
            show,
            type,
            text,
            data
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
