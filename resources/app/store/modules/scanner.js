import axios from "@plugins/axios";

const state = {
    options: [],
    scanning: false
}

const getters = {}

const mutations = {
    setOptions(state, payload) {
        state.options = payload
    },
    setIsScanning(state, payload) {
        state.scanning = payload
    }
}

const actions = {
    scan({commit, dispatch}) {
        commit('setIsScanning', true)
        axios.post('/api/scan').finally(() => {
            commit('setIsScanning', false)
            dispatch('translations/getOptions', null, {root: true})
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
