import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'
import Trade from '../pages/Trade'
import Pay from '../pages/Pay'
import PaySuccess from '../pages/PaySuccess'
import Center from '../pages/Center'
export default [
    {
        path: '/center', component: Center
    },
    {
        path: '/PaySuccess',
        component: PaySuccess
    },
    {
        path: '/pay',
        component: Pay
    },
    {
        path: '/Trade',
        component: Trade
    },
    {
        path: '/ShopCart',
        component: ShopCart
    },
    {
        path: '/cart/addToCart',
        component: AddCartSuccess,
        //props映射参数给路由组件的props，返回一个对象，这里连续两次解构赋值然后传入了路由组件，返回的是一个对象，触发了对象的简写形式
        props({ query: { skunum } }) {
            return { skunum }
        }
    },
    {
        // 加了这个问号,params参数可传可不传
        path: '/detail/:skuId?',
        component: Detail,
        meta: {
            isShowFooter: true
        }
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login,
        meta: {
            // 是否显示footer组件，如果为true的话就是不显示，false的话就是显示，不写默认就是false
            isShowFooter: true
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            isShowFooter: true
        }
    },
    {
        /* name: 'sousuo', */
        /* path: '/search/:keyword', Params参数必须在地址里写上占位符和name，而那边必须写成name */
        path: '/search',
        component: Search,
        //props:true 只映射params参数给路由组件
        //props映射参数给路由组件的props，返回一个对象，这里连续两次解构赋值然后传入了路由组件，返回的是一个对象，触发了对象的简写形式
        props({ query: { keyWord } }) { return { keyWord } }
    }
]