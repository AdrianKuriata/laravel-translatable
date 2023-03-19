import axios from "@plugins/axios";
import route from '@plugins/route'

const state = {
    options: [],
    meta: {},
    searching: false,
    generating: false,
    scanning: false,
    translating: false,
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
    setGenerating(state, payload) {
        state.generating = payload
    },
    setScanning(state, payload) {
        state.scanning = payload
    },
    setTranslating(state, payload) {
        state.translating = payload
    },
    setCurrentPage(state, payload) {
        state.currentPage = payload
    }
}

const actions = {
    getOptions({commit, state, rootState}) {
        commit('setSearching', true)
        axios.get(route('translations.index'), {
            params: {
                search: rootState.languageSearcher.search,
                page: state.currentPage
            }
        }).then((response) => {
            commit('setOptions', response.data.data)
            commit('setMeta', response.data.meta)
        }).finally(() => commit('setSearching', false))
    },
    save({commit, dispatch, rootState}) {
        axios.post(route('translations.update', rootState.editTranslation.translation.id), {
            _method: 'PATCH',
            ...rootState.editTranslation.translation
        }).then((response) => {
            commit('editTranslation/setShowEdit', false, {root: true})
            setTimeout(() => commit('editTranslation/setEditTranslation', null, {root: true}), 500)
            dispatch('getOptions')
        })
    },
    delete({commit, state, dispatch}, translationId) {
        axios.post(route('translations.destroy', translationId), {
            _method: 'DELETE'
        }).finally(() => {
            dispatch('getOptions')
        })
    },
    restore({commit, dispatch}, translationId) {
        commit('deletedTranslations/setScanning', true, {root: true})
        axios.post(route('translations.restore', translationId)).finally(() => {
            commit('deletedTranslations/setScanning', false, {root: true})
            dispatch('deletedTranslations/getOptions', null, {root: true})
        })
    },
    generate({commit}) {
        commit('setGenerating', true)
        axios.post(route('generate')).finally(() => commit('setGenerating', false))
    },
    scan({commit, dispatch}) {
        commit('setScanning', true)
        axios.post(route('scan')).finally(() => {
            commit('setScanning', false)
            dispatch('getOptions')
        })
    },
    translate({commit, dispatch, rootState}) {
        commit('setTranslating', true)
        axios.post(route('translate'), {
            ...rootState.editTranslation.translation
        }).then(response => {
            response.data.items.forEach(item => commit('editTranslation/setTranslationForLocale', {locale: item.locale, translation: item.translation}, {root: true}))
        }).finally(() => {
            commit('setTranslating', false)
            dispatch('config/getConfig', null, {root: true})
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
