const state = {
    translation: null,
    showEdit: false
}

const getters = {}

const mutations = {
    setEditTranslation(state, payload) {
        state.translation = JSON.parse(JSON.stringify(payload))
    },
    setShowEdit(state, payload) {
        state.showEdit = payload
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
