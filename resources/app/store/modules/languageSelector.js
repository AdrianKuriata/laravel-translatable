import axios from "@plugins/axios";

const state = {
    options: [],
    selectedLanguage: null
}

const getters = {}

const mutations = {
    setOptions(state, payload) {
        state.options = payload
    },
    setSelectedLanguage(state, payload) {
        state.selectedLanguage = payload
    }
}

const actions = {
    getOptions({commit, state}) {
        axios.get('/api/languages').then((response) => {
            commit('setOptions', response.data.data)
            commit('setSelectedLanguage', state.options[0].value)
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
