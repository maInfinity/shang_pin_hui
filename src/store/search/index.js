import { reqSearchInfo } from "../../api"
const state = {
    searchList: {}
}
const actions = {
    async getSearchList({ commit }, params = {}) {
        let res = await reqSearchInfo(params)
        if (res.code === 200) {
            commit('GETSEARCHLIST', res.data)
        }
    }
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const getters = {
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    },

}

export default {
    state,
    actions,
    mutations,
    getters
}