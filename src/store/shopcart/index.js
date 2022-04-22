import { reqShopCart, reqDeleteShopCartItems, reqChangeShopCartItemsChecked } from "../../api"
const state = {
    shopCart: {}
}
const actions = {
    async getShopCart({ commit }) {
        let res = await reqShopCart()
        if (res.code == 200) {
            commit('GETSHOPCART', res.data)
        }
    },
    async deleteShopCartItems(_, skuId) {
        let res = await reqDeleteShopCartItems(skuId)
        if (res.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async changeShopCartItemsChecked(_, { skuId, isChecked }) {
        let res = await reqChangeShopCartItemsChecked(skuId, isChecked)
        if (res.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    deleteShopCartItemsThatHasBeenChecked({ dispatch, getters }) {
        let cartInfoList = getters.cartArray.cartInfoList
        let promiseAll = []
        cartInfoList.forEach(item => {
            if (item.isChecked) {
                // 被选中的购物车商品 推到数组中， 为了等会发送 Promise.all请求
                let promise = dispatch('deleteShopCartItems', item.skuId)
                promiseAll.push(promise)
            }
        });
        return Promise.all(promiseAll)
    },
    allCheckedButtonChange({dispatch, getters}, isChecked) {
        let cartInfoList = getters.cartArray.cartInfoList
        let promiseAll = []
        cartInfoList.forEach((item) => {
            let skuId = item.skuId
            let promise = dispatch("changeShopCartItemsChecked", {skuId, isChecked})
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
}
const mutations = {
    GETSHOPCART(state, shopCart) {
        state.shopCart = shopCart
    }
}
const getters = {
    cartArray(state) {
        return state.shopCart[0] || {}
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}