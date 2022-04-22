import axios from "axios";
import nprogress from "nprogress";
import 'nprogress/nprogress.css'
const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
})
import store from '@/store'
requests.interceptors.request.use((config) => {
    nprogress.start()
    if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token
    }
    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token')
    }
    return config
})

requests.interceptors.response.use(
    (res) => {
        nprogress.done()
        return res.data
    },
    (err) => {
        console.log(err)
        return Promise.reject(new Error('fail'))
    }
)

export default requests