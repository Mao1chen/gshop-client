import { reqSkuDetailInfo } from '../../api'
import { SET_SKUDETAILINFO } from '../../util/constant'
// 商品详情的vuex
const actions = {
    async reqSkuDetailInfo({ commit }, skuid) {
        const result = await reqSkuDetailInfo(skuid)
        if (result.code == 200) commit(SET_SKUDETAILINFO, result.data)
    }
}
const mutations = {
    SET_SKUDETAILINFO(state, data) {
        state.skuDetailInfo = data
    }
}
const state = {
    skuDetailInfo: {}
}
const getters = {
    categoryView(state) {
        return state.skuDetailInfo.categoryView || []
    },
    skuInfo(state) {
        return state.skuDetailInfo.skuInfo || []
    },
    spuSaleAttrList(state) {
        return state.skuDetailInfo.spuSaleAttrList || []
    }
}
export default {
    namespaced: 'true',
    actions,
    mutations,
    state,
    getters
}