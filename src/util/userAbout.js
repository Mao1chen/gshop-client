import { v4 as uuidv4 } from 'uuid';
let USERTOKEN_KEY = 'USERTOKEN_KEY'
//存储和创造用户临时的用户标识ID
export function userTempid() {
    let userid = localStorage.getItem('USERTEMPID_KEY')
    if (!userid) {
        localStorage.setItem('USERTEMPID_KEY', uuidv4())
    }
    return userid
}
//存储服务器返回的token到本地存储
export function setUserToken(token) {
    localStorage.setItem(USERTOKEN_KEY, token)
}
//获取本地存储的token数据
export function getUserToken() {
    // 获取不到返回的是null
    return localStorage.getItem(USERTOKEN_KEY)
}
//清除本地存储的token数据
export function removeUserToken() {
    localStorage.removeItem(USERTOKEN_KEY)
}