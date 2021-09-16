import { userTempid, setUserToken, getUserToken, removeUserToken } from '../../util/userAbout'
import { userRegister, userLogin, reqUserInfo, reqUserLogout } from '../../api'
import { SET_USER_TOKEN, SET_USER_INFO } from '../../util/constant'
const state = {
    userTempID: userTempid(),
    // 状态里直接去读本地的本地存储,就不需要mutations设置了
    userToken: getUserToken(),
    userMessage: "",
}
const actions = {
    // 请求注册的动作没有返回值 所以不存
    async reqUserRegisterAction({ commit }, userInfo) {
        const result = await userRegister(userInfo)
        if (result.code == 200) return 'ok'
        else Promise.reject(new Error('Request is Error'))
        commit() // 不写这个eslint要报错,本来不需要提交啥的
    },
    //请求登录的action
    async reqUserLoginAction({ commit }, userInfo) {
        const result = await userLogin(userInfo)
        if (result.code == 200) {
            //如果回来的信息成功了,我们就把返回回来的token存入
            commit(SET_USER_TOKEN, result.data.token)
            setUserToken(result.data.token)
            return 'ok'
        } else {
            Promise.reject(new Error('请求出错了'))
        }
    },
    //请求用户信息的action
    async reqUserInfoAction({ commit }) {
        const result = await reqUserInfo()
        if (result.code == 200) commit(SET_USER_INFO, result.data) //转成字符串丢进去
        else return Promise.reject(new Error('reject'))
    },
    //退出登录的action
    async reqUserLogoutAction({ commit }) {
        const result = await reqUserLogout()
        if (result.code == 200) commit('REMOVE_USER_TOKEN')
        else Promise.reject(new Error('请求出错了'))
    }
}
const mutations = {
    SET_USER_TOKEN(state, token) {
        state.userToken = token
    },
    SET_USER_INFO(state, info) {
        state.userMessage = info
    },
    REMOVE_USER_TOKEN(state) {
        state.userToken = ''  //删除vuex用户token
        state.userMessage = '' //删除用户信息
        removeUserToken()   // 删除本地存储token
    }
}
const getters = {
    emali(state) {
        return state.userMessage.email
    }
}
export default {
    namespaced: 'true',
    state,
    actions,
    mutations,
    getters
}