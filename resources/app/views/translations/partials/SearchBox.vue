<template>
    <v-text-field v-model="term" label="Search translations..." placeholder="Type to filter..." autofocus :loading="isSearching" :hint="hintSearchText" persistent-hint @update:modelValue="inputSearch">
        <template #prepend-inner>
            <span><font-awesome-icon icon="fa-search"></font-awesome-icon></span>
        </template>
        <template #append-inner>
            <span><font-awesome-icon v-if="isSearching" icon="fa-spinner" spin></font-awesome-icon></span>
        </template>
    </v-text-field>
</template>

<script>
import {useStore} from "vuex";
import {computed} from 'vue';
import _debounce from 'lodash/debounce'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    name: 'SearchBox',
    components: {FontAwesomeIcon},
    props: {
        isDeleted: {
            type: Boolean,
            default: () => false
        }
    },
    setup(props) {
        const store = useStore()
        const type = props.isDeleted ? 'deletedTranslations' : 'translations'

        /**
         * COMPUTED
         */
        const term = computed({
            get() {
                return store.state.languageSearcher.search
            },
            set(value) {
                store.commit('languageSearcher/setSearch', value)
            }
        })
        const hintSearchText = computed(() => term.value.length < 3 ? `Put minimum ${3 - term.value.length} chars` : '')
        const isSearching = computed(() => store.state[type].searching)

        /**
         * METHODS
         */
        const inputSearch = _debounce((value) => {
            if (value.length >= 3 || value.length === 0) {
                store.dispatch(`${type}/getOptions`)
            }
        }, 500)

        return {
            inputSearch,
            term,
            isSearching,
            hintSearchText
        }
    }
}
</script>
