// 项目入口文件
import Vue from 'vue';
// 导入App组件
import App from './App.vue';
// 1.创建Vue根实例
new Vue({
  el: '#app',
  components: {
    // 组件名：组件对象
    // App: App
    App // 简写格式
  },
  template: '<App/>'
});

if(module.hot){
  module.hot.accept('./App.vue', () => {
    console.log('文件更新了~~~~');
  });
}