import ajax from './ajax'
import ajaxMock from './ajaxMock'
//首页三级分类的请求 GET请求
export function reqCategoryList() {
    return ajax.get('/product/getBaseCategoryList')
}
//楼层数据的请求  GET请求
export const reqFloos = () => ajaxMock.get('/floors')
//Search组件获取数据的请求  POST请求  下面是请求体参数,直接写了个对象
export const reqSearchInfo = (searchParams) => ajax.post('/list', searchParams)
//商品详情的请求  GET请求   下面是Params参数 直接写在地址里了
export const reqSkuDetailInfo = (skuid) => ajax.get(`/item/${skuid}`)
//添加购物车的请求 POST请求
export const reqAddOrUpdate = () => ajax.post(`/cart/addToCart`) /* /${skuId}/${skuNum} 这里没有带商品ID和商品数量是因为后端服务器不能接没本来该写上的*/
//获取购物车列表的请求 GET请求
export const reqCartInfoList = () => ajax.get(`/cart/cartList`)
//用户注册的请求, POST请求   要带请求体参数,直接就在后面传对象,query或者params参数直接写地址里面
export const userRegister = (userInfo) => ajax.post('/user/passport/register', userInfo)
//用户登录的请求
export const userLogin = (userInfo) => ajax.post('/user/passport/login', userInfo)
//获取用户信息的请求
export const reqUserInfo = () => ajax.get('/user/passport/auth/getUserInfo')
//退出登录的请求
export const reqUserLogout = () => ajax.get('/user/passport/logout')
//获取交易页面的请求
export const reqTradeInfo = () => ajax.get('/order/auth/trade')
//获取订单编号的请求,跳转到支付页 提交订单的请求
export const reqTradeNumber = (tradeNo, orderInfo) => ajax.post(`/order/auth/submitOrder?tradeNo=${tradeNo}`, orderInfo)
//获取订单支付信息
export const reqPaymentInfo = (orderId) => ajax.get(`/payment/weixin/createNative/${orderId}`)
//获取订单支付状态的信息
export const reqPayment = (orderId) => ajax.get(`/payment/weixin/queryPayStatus/${orderId}`)
//获取我的订单列表的信息
export const reqMyOrderInfo = (page, limit) => ajax.get(`/order/auth/${page}/${limit}`)