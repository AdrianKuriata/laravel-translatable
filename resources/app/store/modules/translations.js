import axios from "@plugins/axios";

const state = {
    options: [],
    meta: {},
    searching: false,
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
        axios.get('/api/translations', {
            params: {
                search: rootState.languageSearcher.search,
                page: state.currentPage
            }
        }).then((response) => {
            commit('setOptions', response.data.data)
            commit('setMeta', response.data.meta)
        }).finally(() => commit('setSearching', false))
    },
    delete({commit, state}, translationId) {
        axios.post(`/api/translations/${translationId}`, {
            _method: 'DELETE'
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
