import { reqCategoryList, reqBanners, reqFloors } from "@/api"
const state = {
    categoryList: [],
    banners: [],
    floors: []
}
const actions = {
    async categoryList({ commit }) {
        let res = await reqCategoryList()
        commit('CATEGORYLIST', res.data)
    },
    async getBanners({ commit }) {
        let res = await reqBanners()
        if (res.code == 200) {
            commit('GETBANNERS', res.data)
        }
    },
    async getFloors({ commit }) {
        let res = await reqFloors()
        if (res.code == 200) {
            commit('GETFLOORS', res.data)
        }
    }
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERS(state, banners) {
        state.banners = banners
    },
    GETFLOORS(state, floors) {
        state.floors = floors
    },
}
const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}