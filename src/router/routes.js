/* import Home from '../pages/Home'  会一下打包成一个大文件
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
import myOrder from '../pages/Center/myOrder'
import groupOrder from '../pages/Center/groupOrder' */
/* 路由懒加载:import() 动态加载,当初次访问这个路由的时候才去加载*/
const Home = () => import('../pages/Home')
const Login = () => import('../pages/Login')
const Register = () => import('../pages/Register')
const Search = () => import('../pages/Search')
const Detail = () => import('../pages/Detail')
const AddCartSuccess = () => import('../pages/AddCartSuccess')
const ShopCart = () => import('../pages/ShopCart')
const Trade = () => import('../pages/Trade')
const Pay = () => import('../pages/Pay')
const PaySuccess = () => import('../pages/PaySuccess')
const Center = () => import('../pages/Center')
const myOrder = () => import('../pages/Center/myOrder')
const groupOrder = () => import('../pages/Center/groupOrder')
// import store from '../store'
export default [
    {
        path: '/center',
        component: Center,
        redirect: '/center/myOrder',  //重定向
        children: [
            {
                path: 'myOrder',
                component: myOrder
            },
            {
                path: 'groupOrder',
                component: groupOrder
            },
            // 一上来就显示这个路由组件，需要重定向到上面的路径
            /*  {
                 path: '',
                 redirect: 'myOrder'
             } */
        ]
    },
    {
        path: '/PaySuccess',
        component: PaySuccess,
        beforeEnter: (to, from, next) => {
            //只能从支付页面跳转到支付成功页面
            if (from.path == '/pay') {
                next()
            } else {
                alert('只能从支付页面跳往支付成功页面')
                next('/')
            }
        }
    },
    {
        path: '/pay',
        component: Pay,
        beforeEnter(to, from, next) {
            //只能从交易页面才能跳往到支付页面
            if (from.path == '/Trade') {
                next()
            } else {
                alert('只能从交易页面跳往到支付页面')
                next('/')
            }

        }
    },
    {
        path: '/Trade',
        component: Trade,
        beforeEnter(to, from, next) {
            if (from.path == '/ShopCart') {
                next()
            } else {
                alert('只能从购物车进入交易页面')
                next('/')
            }
        }
    },
    {
        path: '/ShopCart',
        component: ShopCart,
    },
    {
        path: '/cart/addToCart',
        component: AddCartSuccess,
        //props映射参数给路由组件的props，返回一个对象，这里连续两次解构赋值然后传入了路由组件，返回的是一个对象，触发了对象的简写形式
        props({ query: { skunum } }) {
            return { skunum }
        },
        beforeEnter(to, from, next) {
            let skuNum = to.query.skunum
            let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
            if (skuInfo && skuNum) {
                next()
            } else {
                alert('没有参数不能直接访问')
                next('/')
            }
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
        },
        /*   beforeEnter(to, _, next) {
              if (store.state.user.userToken) {
                  alert('你已经登录过了')
                  next('/')
              }
          } 路由独享守卫*/
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