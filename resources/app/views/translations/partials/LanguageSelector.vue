<template>
    <select v-model="selectedLanguage" class="bg-white w-48 px-3 py-1 border outline-0">
        <option v-for="option in options" :value="option.value" v-text="option.label"></option>
    </select>
</template>

<script>
import { onMounted, computed } from 'vue'
import {useStore} from "vuex";

export default {
    name: 'LanguageSelector',
    setup() {
        const store = useStore()
        const options = computed(() => store.state.languageSelector.options)
        const selectedLanguage = computed({
            get() {
                return store.state.languageSelector.selectedLanguage
            },
            set($event) {
                store.commit('languageSelector/setSelectedLanguage', $event)
            }
        })

        onMounted( async () => {
            await store.dispatch('languageSelector/getOptions')
        })

        return {
            options,
            selectedLanguage
        }
    }
}
</script>
