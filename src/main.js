import Vue from 'vue'
import App from './App'
import router from './router'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入公共的样式文件
import '@/assets/css/main.css'

// 引入公共管理状态
import store from './store'
import axios from './axios';




// 使用element-ui
Vue.use(ElementUI) 

Vue.config.productionTip = false


// 使用自定义指令
Vue.directive('document-click', {
  // 每当指令绑定到元素上的时候 会立即执行bind函数 只执行一次
  bind (el, binding, vnode) { // 当前绑定的dom元素, vue对象, 虚拟的节点
    // console.log(el, binding, vnode);
    document.addEventListener('click', binding.value, false);
  },
  // 表示元素插入到dom中的时候 会执行inserted函数
  inserted () {
    console.log('insert')
  },
  // 当window更新的时候 会执行update 可能会执行多次
  update () {
    console.log('update')
  }
})


/* eslint-disable no-new */
// Vue.prototype.axios = axios;
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
