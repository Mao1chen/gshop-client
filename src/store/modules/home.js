import { reqCategoryList, reqFloos } from '../../api'
import { SET_CATEGORYLIST, SET_FLOORS } from '../../util/constant'
const state = {
    categorise: [],
    floor: []
}
const actions = {
    //获取分类的actions
    async getCategoryList({ commit }) {
        const result = await reqCategoryList()
        if (result.code == 200) commit(SET_CATEGORYLIST, result)
    },
    //获取楼层的actions
    async getFools({ commit }) {
        const result = await reqFloos()
        if (result.code == 200) commit(SET_FLOORS, result)
    }
}
const mutations = {
    SET_CATEGORYLIST(state, result) {
        state.categorise = result.data
    },
    SET_FLOORS(state, result) {
        state.floor = result.data
    }
}

export default {
    namespaced: 'true',
    actions,
    mutations,
    state
}