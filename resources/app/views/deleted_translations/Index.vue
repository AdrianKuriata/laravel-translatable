<template>
    <div>
        <search-box is-deleted></search-box>

        <v-table class="mt-4 mb-3">
            <thead>
                <tr>
                    <th class="w-75">
                        Phrase
                    </th>
                    <th class="text-right">
                        <span v-if="meta.from">{{meta.from}} - {{meta.to}} of {{meta.total}} ({{meta.current_page}})</span>
                    </th>
                </tr>
            </thead>
            <tbody v-if="translations.length > 0">
                <tr v-for="translation in translations" :key="`deleted_translation_row_${translation.id}`" class="transition hover:bg-zinc-100">
                    <td v-html="colorizedVariables(translation.phrase)"></td>
                    <td class="flex justify-end items-center">
                        <v-btn size="small" rounded="pill" class="mr-1" @click="askRestoreItem(translation.id)">
                            Restore
                        </v-btn>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="2" class="text-center">Deleted translations not found.</td>
                </tr>
            </tbody>
        </v-table>

        <pagination :page="currentPage" :last-page="lastPage" :pagination-length="paginationLength" @page="currentPage = $event"></pagination>
    </div>

    <notification-confirmation @success="restoreItem"></notification-confirmation>
</template>
<script>
import SearchBox from "@app/views/translations/partials/SearchBox.vue";
import {onMounted, computed, inject} from "vue";
import {useStore} from "vuex";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import NotificationConfirmation from "@app/views/layout/NotificationConfirmation.vue";
import {colorizedVariables} from "@app/utilities/utils";
import Pagination from "@app/views/layout/Pagination.vue";

export default {
    name: 'Index',
    components: {
        Pagination, NotificationConfirmation, FontAwesomeIcon, SearchBox
    },
    setup() {
        const store = useStore()
        const $eventEmit = inject('$eventEmit')

        /**
         * COMPUTED
         */
        const translations = computed(() => store.state.deletedTranslations.options)
        const paginationLength = computed(() => store.state.deletedTranslations.meta.last_page)
        const currentPage = computed({
            get() {
                return store.state.deletedTranslations.meta.current_page
            },
            set(value) {
                store.commit('deletedTranslations/setCurrentPage', value)
                store.dispatch('deletedTranslations/getOptions')
            }
        })
        const lastPage = computed(() => store.state.deletedTranslations.meta.last_page)
        const meta = computed(() => store.state.deletedTranslations.meta)

        onMounted(async() => {
            store.commit('languageSearcher/setSearch', '')
            await store.dispatch('deletedTranslations/getOptions')
        })

        /**
         * METHODS
         */
        const askRestoreItem = (translationId) => {
            $eventEmit('notify-confirmation', {
                message: 'Are you sure you want to restore this item? This action is undoable.',
                type: 'warning',
                data: translationId
            })
        }
        const restoreItem = ($event) => {
            store.dispatch('translations/restore', $event.data)
        }

        return {
            translations,
            colorizedVariables,
            paginationLength,
            currentPage,
            lastPage,
            meta,
            askRestoreItem,
            restoreItem
        }
    }
}
</script>
