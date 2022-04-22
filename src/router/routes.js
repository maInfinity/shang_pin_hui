import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
// import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import myOrder from '@/pages/Center/myOrder'
import groupOrder from '@/pages/Center/groupOrder'

// 这个地方导出路由，这样可以使router 界面的路由更简洁清晰
export default
    [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/detail/:skuId',
            component: () => import('@/pages/Detail'),
            meta: {
                'show': true
            }
        },
        {
            path: '/center',
            name: 'center',
            component: Center,
            redirect: '/center/myorder',
            children: [
                {
                    path: 'myorder',
                    component: myOrder
                },
                {
                    path: 'grouporder',
                    component: groupOrder
                },
                /* {
                    path: '',
                    redirect:'/center/myorder'
                }, */
            ],
            meta: {
                'show': true
            }
        },
        {
            path: '/paysuccess',
            name: 'paysuccess',
            component: PaySuccess,
            meta: {
                'show': true
            },
            beforeEnter: (to, from, next) => {
                if (from.path == '/pay') {
                    next()
                } else {
                    next(false)
                }
            }
        },
        {
            path: '/pay',
            name: 'pay',
            component: Pay,
            meta: {
                'show': true
            },
            beforeEnter: (to, from, next) => {
                if (from.path == '/trade') {
                    next()
                } else {
                    next(false)
                }
            }
        },
        {
            path: '/trade',
            name: 'trade',
            component: Trade,
            meta: {
                'show': true
            },
            beforeEnter: (to, from, next) => {
                if (from.path == '/shopcart') {
                    next()
                } else {
                    next(false)
                }
            }
        },
        {
            path: '/addcartsuccess',
            name: 'addcartsuccess',
            component: AddCartSuccess,
            meta: {
                'show': true
            }
        },
        {
            path: '/shopcart',
            component: ShopCart,
            meta: {
                'show': true
            }
        },
        {
            path: '/home',
            component: Home,
            meta: {
                'show': true
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                'show': false
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                'show': false
            }
        },
        {
            name: 'search',
            path: '/search/:keyword?',
            component: Search,
            meta: {
                'show': true
            }
        },
    ]