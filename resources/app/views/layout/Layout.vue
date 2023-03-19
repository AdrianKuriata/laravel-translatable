<template>
    <v-app>
        <v-app-bar>
            <v-app-bar-title>
                <div class="flex justify-start items-center">
                    <div>
                        Laravel Translatable
                    </div>

                    <div class="ml-5 text-sm">
                        <router-link :to="{name: 'translations.index'}" class="hover:text-blue-400 transition">Translations</router-link>
                        <router-link :to="{name: 'deleted_translations.index'}" class="hover:text-blue-400 ml-2 transition">Deleted translations</router-link>
                    </div>
                </div>
            </v-app-bar-title>

            <template #append>
                <div v-if="config.translator_on && config.driver === 'deepl'">
                    DeepL usage: {{config.usage.character_count}}/{{config.usage.character_limit}}
                </div>
                <v-btn :loading="isGenerating" icon :disabled="isGenerating" @click="generate">
                    <font-awesome-icon icon="fa-file-lines"></font-awesome-icon>
                    <v-tooltip
                        activator="parent"
                        location="top"
                    >Click for generate language files</v-tooltip>
                </v-btn>
                <v-btn :loading="isScanning" icon :disabled="isScanning" @click="scan">
                    <font-awesome-icon icon="fa-circle-play"></font-awesome-icon>
                    <v-tooltip
                        activator="parent"
                        location="top"
                    >Click for scan new translations</v-tooltip>
                </v-btn>
            </template>
        </v-app-bar>
        <div class="container mx-auto mt-24">
            <notification class="mb-3"></notification>
            <router-view />
        </div>
    </v-app>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {computed} from "vue";
import {useStore} from "vuex";
import Notification from "@app/views/layout/Notification.vue";

export default {
    name: 'Layout',
    components: {Notification, FontAwesomeIcon},
    setup() {
        const store = useStore()
        const isScanning = computed(() => store.state.translations.scanning)
        const isGenerating = computed(() => store.state.translations.generating)
        const config = computed(() => store.state.config.config)

        const scan = () => {
            store.dispatch('translations/scan')
        }

        const generate = () => {
            store.dispatch('translations/generate')
        }

        return {
            isScanning,
            scan,
            isGenerating,
            generate,
            config
        }
    }
}
</script>

<style lang="scss">
.v-toolbar__content {
    @apply container;
    @apply mx-auto;
}
</style>
