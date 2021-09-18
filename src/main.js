import Vue from 'vue'
import App from './App'
import router from './router'
import TypeNav from './components/TypeNav'
import MyPagination from './components/Pagination'
import store from './store'
import './plugins/swiper'  //加载swiper配置
import './plugins/element'  //加载element配置文件
import './plugins/validate'  //加载表单验证插件
import './mock/mockServer'
import * as API from './api'
import VueLazyload from 'vue-lazyload'  //图片懒加载
import loading from '@/assets/images/loading.gif'
// 在图片界面没有进入到可视范围前不加载, 在没有得到图片前先显示loading图片
Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
    loading,  // 指定未加载得到图片之前的loading图片
})
Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
Vue.component(MyPagination.name, MyPagination)
new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this  //全局事件总线
        Vue.prototype.$API = API  //在没有vuex异步actions发请求的时候,我们把它挂载原型对象上让每个组件都能直接使用请求函数
    },
    render: elementCreate => elementCreate(App),
    router,  //注册路由器 ==>所有组件都可以直接访问两个对象：$router $route
    store  //使用Vuex,所有组件都能直接访问$store
}).$mount('#root')