import Vue from 'vue'
import App from './App'
import router from './router'
import TypeNav from './components/TypeNav'
import Pagination from './components/Pagination'
import store from './store'
import './plugins/swiper'  //加载swiper配置
import './plugins/element'  //加载element配置文件
import './mock/mockServer'
import * as API from './api'
Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name, Pagination)
new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this  //全局事件总线
        Vue.prototype.$API = API  //在没有vuex异步actions发请求的时候,我们把它挂载原型对象上让每个组件都能直接使用请求函数
    },
    render: elementCreate => elementCreate(App),
    router,  //注册路由器 ==>所有组件都可以直接访问两个对象：$router $route
    store  //使用Vuex,所有组件都能直接访问$store
}).$mount('#root')