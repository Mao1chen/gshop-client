import { reqAddOrUpdate, reqCartInfoList } from '../../api'
import { SET_CARTINFO_LIST } from '../../util/constant'
const state = {
    cartInfoList: {}
}
const mutations = {
    SET_CARTINFO_LIST(state, data) {
        state.cartInfoList = data
    }
}
const actions = {
    async reqAddOrUpdate({ commit }) {
        const result = await reqAddOrUpdate()
        if (result.code == 200) return 'ok'
        else Promise.reject(new Error('请求出错了'))
        commit() //不用eslint报错
    },
    // 请求购物车列表
    async getCartInfoList({ commit }) {
        const result = await reqCartInfoList()
        if (result.code == 200) commit(SET_CARTINFO_LIST, result.data)
    },
    // 这里是点击修改全部的actions,那边一点击就分发过来
    //进去这个回调,取出dispath和state数据
    //外面定义了个promises的数组
    //然后遍历状态里的列表数据,拿到里面的每一个元素(对象),判断里面的是否选中KEY是否和传过来的KEY相同
    //如果相同的话直接就跳过当前元素,下一个元素继续,如果不同的话我们分发修改单个动作的那个actios,
    //上面的actions返回的是是否添加成功的promise对象(失败或者成功的),然后接收到每个返回的promise对象
    //推入到一开始定义的promises数组中,循环完毕,调了数组元素次dispath
    //然后在调用Promise.all([]),传入数组(数组里的元素都是promise对象(有成功有失败)),返回一个promise对象,
    //成功或失败由数组里决定,数组全成功就返回一个成功的promise对象,值是每一个执行成功值的数组
    async updateCarCheckAII({ dispatch, state }, isChecked) {
        let promises = []
        state.cartInfoList.forEach(item => {
            if (item.isChecked == isChecked) return
            let promise = dispatch('updateCartChecked', { skuId: item.skuId, isChecked })
            promises.push(promise)
        })
        //返回的是上面异步函数每一个执行的成功值得数组,而不是这个promise.all的返回值promise
        return Promise.all(promises)
    }
    // Promise.all 是一个方法(函数)
    // 参数:一个promise对象的 数组
    //返回值: 一个新的promise对象
    //新的promise对象的状态是成功还是失败:
    // 如果promise对象的数组当中有一个失败,那么状态就是失败,失败的原因就是第一个失败的promise的原因
    //如果promise对象的数组当中没有失败,那么状态就是成功,成功的结果是所有的promise成功的结果组成的数组

}
const getters = {

}
export default {
    namespaced: 'true',
    state,
    mutations,
    actions,
    getters
}