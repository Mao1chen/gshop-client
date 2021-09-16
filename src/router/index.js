import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import routes from './routes'
Vue.use(VueRouter)
/* 解决编程式路由重复跳转错误:
    1.在每次push时指定回调函数或catch错误
    2.重写VueRouter原型上的push方法(比较好)
*/
//先存入以前的push
const originalReplace = VueRouter.prototype.replace;
//重写原型的push和replace方法,每次调用push或replace的时候默认都catch了一下
VueRouter.prototype.replace = function (location) {
    return originalReplace.call(this, location).catch(err => err);
}
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
    return originalPush.call(this, location).catch(err => err)
}

const Router = new VueRouter({
    mode: 'history',
    routes,
    /* 用于跳转路由组件到顶部 */
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})
Router.beforeEach(async (to, from, next) => {
    let token = store.state.user.userToken
    if (token) {
        if (to.path == '/login') {
            alert('已经登录过了哦')
            next('/')
        } else {
            const isTrue = !!store.state.user.userMessage//取反转换成布尔值,在取反转换为原来布尔值(转布尔值的方法),对象一直都是true
            if (!isTrue) {
                try {
                    //获取用户的信息
                    await store.dispatch('user/reqUserInfoAction')
                    next()
                } catch (error) {
                    alert('请重新登录')
                    store.commit('user/REMOVE_USER_TOKEN')
                    next('/login?redirect=' + to.path)
                }
            } else {
                next()
            }
        }
    } else {
        next()
    }
    // 每次跳转的时候守卫都会执行,取出状态里的token,如果存在的话但是在点击了登录页面我们就跳往首页
    //点击了其他界面我们就去发请求拿用户信息,但是要在vuex里没有用户信息的时候才拿,有的话直接就next放行
    //用户请求信息的时候出错我们就跳往登录页面重新获取token,随便把没去成的路径给带过去,那边跳下一个页面的时候看带不带参数
    //如果token不存在的话直接放行 还要做进入订单界面的判断,先暂时放行
    //当用户信息和token都存在时,都会无条件放行,但是一刷新页面,vuex里面的东西都会刷新,只有token了,会去读本地的
    //然后又去获取用户信息,如果服务器返回token过期了就需要重新登录获取token,如果成功了就放行
})
export default Router