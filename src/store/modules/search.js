import { reqSearchInfo } from '../../api'
import { SET_PRODUCT_LIST } from '../../util/constant'
const state = {
    productList: {}
}
const mutations = {
    SET_PRODUCT_LIST(state, result) {
        state.productList = result.data
    }
}
const actions = {
    async getProductList({ commit }, searchParams) {
        // 不想下面的遍历修改影响源数据 所以利用了浅拷贝 浅拷贝:新的数据发生变化不影响源数据内容,源数据内容发生变化影响新数据
        searchParams = { ...searchParams }
        Object.keys(searchParams).forEach(key => {
            if (searchParams[key] == '' || Array.isArray(searchParams[key]).length == 0) delete searchParams[key]
        })
        const result = await reqSearchInfo(searchParams)
        if (result.code == 200) commit(SET_PRODUCT_LIST, result)
    }
}
const getters = {
    //获取属性列表
    attrsList(state) {
        return state.productList.attrsList || []
    },
    //获取品牌列表
    trademarkList() {
        return state.productList.trademarkList || []
    }
}
export default {
    namespaced: 'true',
    state,
    mutations,
    actions,
    getters
}