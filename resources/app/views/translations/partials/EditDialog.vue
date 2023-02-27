<template>
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
                        <font-awesome-icon icon="fa-times" class="cursor-pointer" @click="cancel"></font-awesome-icon>
                    </div>
                </div>
            </v-card-title>
            <v-card-text>
                <div v-for="(item, index) in form.translations" :class="{ 'mt-2': index > 0 }">
                    <v-textarea v-model="item.translation" auto-grow counter rows="3" :label="`Translation in ${item.locale_name}`"></v-textarea>
                </div>
            </v-card-text>
            <v-card-actions class="border-t flex justify-end items-center">
                <v-btn
                    color="red-darken-1"
                    variant="text"
                    @click="cancel"
                >
                    Disagree
                </v-btn>
                <v-btn
                    color="green-darken-1"
                    variant="text"
                    @click="success"
                >
                    Agree
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {computed} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useStore} from "vuex";

export default {
    name: 'EditDialog',
    components: {FontAwesomeIcon},
    setup() {
        const store = useStore()

        /**
         * COMPUTED
         */
        const form = computed({
            get() {
                return store.state.editTranslation.translation
            },
            set(value) {
                store.commit('editTranslation/setEditTranslation', value)
            }
        })
        const showEdit = computed({
            get() {
                return store.state.editTranslation.showEdit
            },
            set(value) {
                store.commit('editTranslation/setShowEdit', value)
            }
        })

        /**
         * METHODS
         */
        const success = () => {
            store.dispatch('translations/save')
        }
        const cancel = () => {
            store.commit('editTranslation/setShowEdit', false)
            setTimeout(() => store.commit('editTranslation/setEditTranslation', null), 500)
        }

        return {
            form,
            showEdit,
            success,
            cancel
        }
    }
}
</script>
