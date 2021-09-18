import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import user from './modules/user'
import search from './modules/search'
import detail from './modules/detail'
import shopCart from './modules/shopCart'
import trade from './modules/trade'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        home,
        user,
        search,
        detail,
        shopCart,
        trade
    }
})