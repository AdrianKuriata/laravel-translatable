import axios from "@plugins/axios";
import route from "@plugins/route";

const state = {
    config: {}
}

const getters = {}

const mutations = {
    setConfig(state, payload) {
        state.config = payload
    }
}

const actions = {
    async getConfig({commit}) {
        await axios.get(route('config'))
            .then((response) => {
                commit('setConfig', response.data)
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
