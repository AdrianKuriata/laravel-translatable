<template>
    <v-app>
        <v-app-bar>
            <v-app-bar-title>Laravel Translatable</v-app-bar-title>

            <template #append>
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
import LanguageSelector from "../translations/partials/LanguageSelector.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {VAppBar, VAppBarNavIcon, VAppBarTitle} from 'vuetify/components/VAppBar'
import {VBtn} from 'vuetify/components/VBtn'
import {VTooltip} from 'vuetify/components/VTooltip'
import {computed} from "vue";
import {useStore} from "vuex";
import Notification from "@app/views/layout/Notification.vue";

export default {
    name: 'Layout',
    components: {Notification, FontAwesomeIcon, LanguageSelector, VAppBar, VAppBarNavIcon, VAppBarTitle, VBtn, VTooltip},
    setup() {
        const store = useStore()
        const isScanning = computed(() => store.state.scanner.scanning)

        const scan = () => {
            store.dispatch('scanner/scan')
        }

        return {
            isScanning,
            scan
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
