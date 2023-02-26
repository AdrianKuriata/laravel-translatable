import axios from "@plugins/axios";
import route from '@plugins/route'

const state = {
    options: [],
    meta: {},
    searching: false,
    generating: false,
    scanning: false,
    currentPage: 1
}

const getters = {}

const mutations = {
    setOptions(state, payload) {
        state.options = payload
    },
    setMeta(state, payload) {
        state.meta = payload
    },
    setSearching(state, payload) {
        state.searching = payload
    },
    setCurrentPage(state, payload) {
        state.currentPage = payload
    }
}

const actions = {
    getOptions({commit, state, rootState}) {
        commit('setSearching', true)
        axios.get(route('deleted_translations.index'), {
            params: {
                search: rootState.languageSearcher.search,
                page: state.currentPage
            }
        }).then((response) => {
            commit('setOptions', response.data.data)
            commit('setMeta', response.data.meta)
        }).finally(() => commit('setSearching', false))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
