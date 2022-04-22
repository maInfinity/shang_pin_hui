import { reqGetCode, reqRegister, reqLogin, reqUserInfo, reqLogout } from "@/api"
const state = {
    code: '',
    // token: '',
    userInfo: {}
}
const actions = {
    async getCode({ commit }, phone) {
        let res = await reqGetCode(phone)
        if (res.code == 200) {
            commit('GETCODE', res.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async register(_, params) {
        let res = await reqRegister(params)
        if (res.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    // 登录
    async login(_, data) {
        let res = await reqLogin(data)
        if (res.code == 200) {
            // commit('LOGIN', res.data.token)
            localStorage.setItem('token', res.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async getUserInfo({ commit }) {
        let res = await reqUserInfo()
        if (res.code == 200) {
            commit('GETUSERINFO', res.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async logout({ commit }) {
        let res = await reqLogout()
        if (res.code == 200) {
            commit('LOGOUT')
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    }
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    // LOGIN(state, token) {
    //     state.token = token
    // },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    LOGOUT(state) {
        localStorage.removeItem('token')
        state.userInfo = {}
    }
}
const getters = {
}

export default {
    state,
    actions,
    mutations,
    getters
}