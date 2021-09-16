import { reqTradeInfo } from '../../api'
import { SET_TRADE_INFO } from '../../util/constant'
const state = {
    tradeInfo: {}
}
const actions = {
    async getTradeInfoAction({ commit }) {
        const result = await reqTradeInfo()
        if (result.code == 200) commit(SET_TRADE_INFO, result.data)
        else return Promise.reject(new Error('reject'))
    }
}
const mutations = {
    SET_TRADE_INFO(state, info) {
        state.tradeInfo = info
    }
}
const getters = {
    detailArrayList(state) {
        return state.tradeInfo.detailArrayList
    },
    userAddressList(state) {
        return state.tradeInfo.userAddressList
    },
    totalAmount(state) {
        return state.tradeInfo.totalAmount
    },
    totalNum(state) {
        return state.tradeInfo.totalNum
    }
}

export default {
    namespaced: 'true',
    state,
    actions,
    mutations,
    getters
}