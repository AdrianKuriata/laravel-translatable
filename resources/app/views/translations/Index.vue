<template>
    <div>
        <search-box></search-box>

        <v-table class="mt-4 mb-3">
            <thead>
                <tr>
                    <th class="w-75">
                        Phrase
                    </th>
                    <th class="text-center">
                        <div class="flex justify-between items-center">
                            Languages
                            <font-awesome-icon icon="fa-circle-info" class="ml-1"></font-awesome-icon>
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >
                                Click to show languages, that have been translated.
                            </v-tooltip>
                        </div>
                    </th>
                    <th class="text-center">
                        <div class="flex justify-between items-center">
                            Source
                            <font-awesome-icon icon="fa-circle-info" class="ml-1"></font-awesome-icon>
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >
                                Click to show locations where phrase have been found.
                            </v-tooltip>
                        </div>
                    </th>
                    <th class="text-right">
                        <span v-if="meta.from">{{meta.from}} - {{meta.to}} of {{meta.total}} ({{meta.current_page}})</span>
                    </th>
                </tr>
            </thead>
            <tbody v-if="translations.length > 0">
                <tr v-for="translation in translations" :key="`translation_row_${translation.id}`" class="transition hover:bg-zinc-100">
                    <td v-html="colorizedVariables(translation.phrase)"></td>
                    <td class="text-center">
                        <v-menu>
                            <template #activator="{ props }">
                                <v-btn v-bind="props" size="small" rounded="pill">
                                    Show
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item v-for="(isTranslated, language) in translation.languages" :key="`language_${language}_${translation.id}`">
                                    <v-list-item-title>
                                        <div v-if="isTranslated">
                                            <span class="mr-1">{{ language }}</span>
                                            <font-awesome-icon icon="fa-check"></font-awesome-icon>
                                            <v-tooltip
                                                activator="parent"
                                                location="top"
                                            >
                                                Phrase is translated in that language.
                                            </v-tooltip>
                                        </div>
                                        <div v-else>
                                            <span class="mr-1">{{ language }}</span>
                                            <font-awesome-icon icon="fa-times"></font-awesome-icon>
                                            <v-tooltip
                                                activator="parent"
                                                location="top"
                                            >
                                                Phrase is not translated in that language.
                                            </v-tooltip>
                                        </div>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </td>
                    <td class="text-center">
                        <v-menu>
                            <template #activator="{ props }">
                                <v-btn v-bind="props" size="small" rounded="pill">
                                    Show ({{translation.source.length}})
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item v-for="(source, indexSource) in translation.source" :key="`language_${indexSource}_${translation.id}`">
                                    <v-list-item-title>
                                        {{source}}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </td>
                    <td class="flex justify-end items-center">
                        <v-btn size="small" rounded="pill" class="mr-1" @click="askEditItem(translation)">
                            Edit
                        </v-btn>
                        <v-btn size="small" rounded="pill" @click="askDeleteItem(translation.id)">
                            Delete
                        </v-btn>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
            <tr>
                <td colspan="4" class="text-center">Translations not found.</td>
            </tr>
            </tbody>
        </v-table>

        <pagination :page="currentPage" :last-page="lastPage" :pagination-length="paginationLength" @page="currentPage = $event"></pagination>
    </div>

    <notification-confirmation @success="deleteItem"></notification-confirmation>

    <edit-dialog></edit-dialog>
</template>
<script>
import SearchBox from "@app/views/translations/partials/SearchBox.vue";
import {onMounted, computed, inject} from "vue";
import {useStore} from "vuex";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import NotificationConfirmation from "@app/views/layout/NotificationConfirmation.vue";
import EditDialog from "@app/views/translations/partials/EditDialog.vue";
import {colorizedVariables} from "@app/utilities/utils";
import Pagination from "@app/views/layout/Pagination.vue";

export default {
    name: 'Index',
    components: {
        Pagination,
        EditDialog,
        NotificationConfirmation,
        FontAwesomeIcon, SearchBox
    },
    setup() {
        const store = useStore()
        const $eventEmit = inject('$eventEmit')

        /**
         * COMPUTED
         */
        const translations = computed(() => store.state.translations.options)
        const paginationLength = computed(() => store.state.translations.meta.last_page)
        const currentPage = computed({
            get() {
                return store.state.translations.meta.current_page
            },
            set(value) {
                store.commit('translations/setCurrentPage', value)
                store.dispatch('translations/getOptions')
            }
        })
        const lastPage = computed(() => store.state.translations.meta.last_page)
        const meta = computed(() => store.state.translations.meta)

        onMounted(async() => {
            store.commit('languageSearcher/setSearch', '')
            await store.dispatch('translations/getOptions')
        })

        /**
         * METHODS
         */
        const askDeleteItem = (translationId) => {
            $eventEmit('notify-confirmation', {
                message: 'Are you sure you want to delete this item? These will be available in Deleted translations section.',
                type: 'warning',
                data: translationId
            })
        }
        const deleteItem = ($event) => {
            store.dispatch('translations/delete', $event.data)
        }

        const askEditItem = ($translation) => {
            store.commit('editTranslation/setEditTranslation', $translation)
            store.commit('editTranslation/setShowEdit', true)
        }

        return {
            translations,
            colorizedVariables,
            paginationLength,
            currentPage,
            lastPage,
            meta,
            askEditItem,
            askDeleteItem,
            deleteItem
        }
    }
}
</script>
