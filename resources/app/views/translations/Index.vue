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
                        {{meta.from}} - {{meta.to}} of {{meta.total}} ({{meta.current_page}})
                    </th>
                </tr>
            </thead>
            <tbody>
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
                                    Show
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item v-for="(source) in translation.source" :key="`language_${language}_${translation.id}`">
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
        </v-table>

        <v-pagination v-model="currentPage" show-first-last-page :length="paginationLength" :total-visible="5" rounded="circle">
            <template #prev>
                <v-btn icon @click="currentPage === 1 ? currentPage : currentPage--" :disabled="currentPage === 1">
                    <font-awesome-icon icon="fa-chevron-left"></font-awesome-icon>
                </v-btn>
                <span></span>
            </template>
            <template #next>
                <v-btn icon @click="currentPage === lastPage ? lastPage : currentPage++" :disabled="currentPage === lastPage">
                    <font-awesome-icon icon="fa-chevron-right"></font-awesome-icon>
                </v-btn>
            </template>
            <template #first>
                <v-btn @click="currentPage = 1" :disabled="currentPage === 1">
                    Start
                </v-btn>
            </template>
            <template #last>
                <v-btn @click="currentPage = lastPage" :disabled="currentPage === lastPage">
                    End
                </v-btn>
            </template>
        </v-pagination>
    </div>

    <notification-confirmation @success="deleteItem"></notification-confirmation>

    <v-dialog
        v-model="showEdit"
        persistent
        width="900"
    >
        <v-card>
            <v-card-title class="text-h5 border-b">
                <div class="flex justify-between items-center">
                    <div>
                        Edit translation
                    </div>
                    <div>
                        <font-awesome-icon icon="fa-times" class="cursor-pointer" @click="showEdit = false"></font-awesome-icon>
                    </div>
                </div>
            </v-card-title>
            <v-card-text>
                <div v-for="(tr, index) in translationToEdit.translations" :class="{ 'mt-2': index > 0 }">
                    <v-textarea v-model="tr.translation" auto-grow counter rows="3" :label="`Translation in ${tr.locale_name}`"></v-textarea>
                </div>
            </v-card-text>
            <v-card-actions class="border-t flex justify-end items-center">
                <v-btn
                    color="green-darken-1"
                    variant="text"
                    @click="showEdit = false"
                >
                    Disagree
                </v-btn>
                <v-btn
                    color="green-darken-1"
                    variant="text"
                    @click="showEdit = false"
                >
                    Agree
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import SearchBox from "@app/views/translations/partials/SearchBox.vue";
import {onMounted, computed, ref, inject} from "vue";
import {useStore} from "vuex";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {VTooltip} from "vuetify/components/VTooltip"
import {VTable} from "vuetify/components/VTable"
import {VMenu} from "vuetify/components/VMenu"
import {VBtn} from "vuetify/components/VBtn"
import {VPagination} from "vuetify/components/VPagination"
import {VList, VListItem, VListItemTitle} from "vuetify/components/VList"
import {VDialog} from "vuetify/components/VDialog"
import {VCard, VCardTitle, VCardText, VCardActions} from "vuetify/components/VCard"
import {VTextarea} from "vuetify/components/VTextarea"
import NotificationConfirmation from "@app/views/layout/NotificationConfirmation.vue";

export default {
    name: 'Index',
    components: {
        NotificationConfirmation,
        FontAwesomeIcon, SearchBox, VTooltip, VTable, VMenu, VList, VListItem, VListItemTitle, VBtn, VPagination, VDialog, VCard, VCardTitle, VCardText, VCardActions, VTextarea},
    setup() {
        const store = useStore()
        const $eventEmit = inject('$eventEmit')
        const showTooltip = ref({})
        const translations = computed(() => store.state.translations.options)
        const paginationLength = computed(() => store.state.translations.meta.last_page)
        const showEdit = ref(false)
        const translationToEdit = ref({})
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
            await store.dispatch('translations/getOptions')
        })

        const colorizedVariables = (phrase) => {
            const regex = /:\S\w+/gm;
            let m;
            const matches = []

            while ((m = regex.exec(phrase)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }

                // The result can be accessed through the `m`-variable.
                m.forEach((mm, groupIndex) => {
                    matches.push(mm)
                });
            }

            if (matches.length > 0) {
                matches.forEach((match) => {
                    phrase = phrase.replaceAll(match, `<span class="text-green-500">${match}</span>`)
                })
            }

            return phrase
        }
        const askDeleteItem = (translationId) => {
            $eventEmit('notify-confirmation', {
                message: 'Are you sure you want to delete this item? This action is undoable.',
                type: 'warning',
                data: translationId
            })
        }
        const deleteItem = ($event) => {
            store.dispatch('translations/delete', $event.data)
        }

        const askEditItem = ($translation) => {
            showEdit.value = true
            translationToEdit.value = $translation
        }

        return {
            translations,
            showTooltip,
            colorizedVariables,
            paginationLength,
            currentPage,
            lastPage,
            meta,
            askEditItem,
            showEdit,
            translationToEdit,
            askDeleteItem,
            deleteItem
        }
    }
}
</script>
