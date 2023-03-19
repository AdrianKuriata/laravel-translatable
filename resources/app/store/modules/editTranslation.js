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
    },
    setTranslationForLocale(state, payload) {
        const index = state.translation.translations.findIndex((item) => item.locale === payload.locale)
        if (index !== -1) {
            state.translation.translations[index].translation = payload.translation
        }
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
