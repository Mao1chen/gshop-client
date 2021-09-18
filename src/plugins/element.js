import Vue from 'vue'
import {
    MessageBox,
    Message,
    Pagination
} from 'element-ui'
// 代码组件
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
// 这是element组件插件，按需引入两个组件，然后把组件挂载了vue原型上，每个组件都能访问到访问里面的方法
//标签组件
Vue.use(Pagination)