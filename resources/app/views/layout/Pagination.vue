<template>
    <v-pagination v-model="currentPage" show-first-last-page :length="paginationLength" :total-visible="5" rounded="circle" @update:modelValue="$emit('page', $event)">
        <template #prev>
            <v-btn variant="text" icon @click="currentPage === 1 ? currentPage : currentPage--" :disabled="currentPage === 1" class="rounded-circle">
                <font-awesome-icon icon="fa-chevron-left"></font-awesome-icon>
            </v-btn>
            <span></span>
        </template>
        <template #next>
            <v-btn variant="text" icon @click="currentPage === lastPage ? lastPage : currentPage++" :disabled="currentPage === lastPage" class="rounded-circle">
                <font-awesome-icon icon="fa-chevron-right"></font-awesome-icon>
            </v-btn>
        </template>
        <template #first>
            <v-btn variant="text" icon class="rounded-circle" @click="currentPage = 1" :disabled="currentPage === 1">
                <font-awesome-icon icon="fa-backward-fast"></font-awesome-icon>
            </v-btn>
        </template>
        <template #last>
            <v-btn variant="text" icon class="rounded-circle" @click="currentPage = lastPage" :disabled="currentPage === lastPage">
                <font-awesome-icon icon="fa-forward-fast"></font-awesome-icon>
            </v-btn>
        </template>
    </v-pagination>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref} from 'vue'

export default {
    name: 'Pagination',
    components: {FontAwesomeIcon},
    props: {
        page: {
            type: Number,
            default: () => 1
        },
        lastPage: {
            type: Number,
            default: () => 1
        },
        paginationLength: {
            type: Number,
            default: () => 10
        }
    },
    setup(props) {
        const currentPage = ref(props.page)
        return {
            currentPage
        }
    }
}
</script>
