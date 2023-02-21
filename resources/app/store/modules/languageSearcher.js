const state = {
    search: ''
}

const getters = {}

const mutations = {
    setSearch(state, payload) {
        state.search = payload
    }
}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
