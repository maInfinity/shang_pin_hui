import { reqGoodsInfo, reqAddToCart } from "../../api"
import {get_uuid} from '@/utils/uuid_token'
const state = {
    goodsInfo: {},
    uuid_token: get_uuid()
}
const actions = {
    async getGoodsInfo({ commit }, skuId) {
        let res = await reqGoodsInfo(skuId)
        if (res.code == 200) {
            commit('GETGOODSINFO', res.data)
        }
    },
    async addToCart(_, {skuId, skuNum}) {
        let res = await reqAddToCart(skuId, skuNum)
        if (res.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    }
}
const mutations = {
    GETGOODSINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo
    }
}
const getters = {
    categoryView(state) {
        return state.goodsInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodsInfo.spuSaleAttrList || []
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}