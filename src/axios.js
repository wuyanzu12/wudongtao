import axios from 'axios'




// axios.defaults.baseURL = 'http://api.duyiedu.com/api';
// axios.interceptors.request.use(function(config) {
//   // 在发送请求之前做什么
//   console.log(config);
//   config.params = {
//     ...config.params,
//     appkey: ''
//   }
//   return config;
// }, function(error) {
//   return Promise.reject(error);
// });
// export default axios










var instance = axios.create({
  baseURL: 'http://api.duyiedu.com/api' // 基础路径
})
// 添加拦截请求
instance.interceptors.request.use(function (config) {
  config.params = {
    ...config.params, // 如果还需要传递一些值的话 不想覆盖 只想添加要用到克隆 ES6中的解构赋值 把你之前传过来的param放在这里 后面拼接上数据
    appkey: 'cmh23122_1554601817885'
  }
  // 在发送请求之前做些什么
  return config
}, function (error) {
// 对请求错误做些什么
  return Promise.reject(error)
})

export default instance
