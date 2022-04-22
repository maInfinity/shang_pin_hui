import requests from './request'
import mockAjax from './mockAjax'
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
export const reqBanners = () => mockAjax.get('/banners')
export const reqFloors = () => mockAjax.get('/floors')
export const reqSearchInfo = (params) => requests({
    url: "/list",
    method: "post",
    data: params
})
export const reqGoodsInfo = (skuId) => requests({
    url: `/item/${skuId}`,
    method: "get",
})
export const reqAddToCart = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post',
})
export const reqShopCart = () => requests({
    url: '/cart/cartList',
    method: 'get'
})
export const reqDeleteShopCartItems = (skuId) => requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
})
export const reqChangeShopCartItemsChecked = (skuId, isChecked) => requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
})
export const reqGetCode = (phone) => requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
})
export const reqRegister = (params) => requests({
    url: '/user/passport/register',
    method: 'post',
    data: params
})
// 用户登录
export const reqLogin = (data) => requests({
    url: '/user/passport/login',
    method: 'post',
    data
})
// 获取用户信息
export const reqUserInfo = () => requests({
    url: '/user/passport/auth/getUserInfo',
    method: 'get',
})
// 退出登录
export const reqLogout = () => requests({
    url:'/user/passport/logout',
    method:'get'
})

// 获取用户地址信息
export const reqUserAddress = () => requests({
    url:'/user/userAddress/auth/findUserAddressList',
    method:'get'
})

// 获取用户地址信息
export const reqOrderList = () => requests({
    url:'/order/auth/trade',
    method:'get'
})

export const reqOrderSubmit = (tradeNo,data) => requests({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method:'post',
    data
})
export const reqGetPayment = (orderId) => requests({
    url:`/payment/weixin/createNative/${orderId}`,
    method:'get',
})
export const reqPaymentStatus = (orderId) => requests({
    url:`/payment/weixin/queryPayStatus/${orderId}`,
    method:'get'
})
export const reqPaymentList = (page, limit) => requests({
    url:`/order/auth/${page}/${limit}`,
    method:'get'
})