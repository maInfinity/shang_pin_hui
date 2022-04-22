import { reqUserAddress, reqOrderList } from "@/api"
const state = {
    address: [],
    order: {}
}
const actions = {
    async getUserAddress({commit}) {
        let res = await reqUserAddress()
        commit('GETUSERADDRESS', res.data)
    },
    async getOrderList({commit}) {
        let res = await reqOrderList()
        commit('GETORDERLIST', res.data)
    },
}
const mutations = {
    GETUSERADDRESS(state, address) {
        state.address = address
    },
    GETORDERLIST(state, order) {
        state.order = order
    },
}
const getters = {
}

export default {
    state,
    actions,
    mutations,
    getters
}