// 项目入口文件
import Vue from 'vue';
// 导入App组件
// import App from './App.vue';
import App from './operateExcel/index.vue';

// 注册全局组件
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  computed: {
    inputListeners: function() {
      console.log('this.$listeners..................', this.$listeners);
      return this.$listeners;
    },
  },
  mounted() {
    console.log('this.inputListeners..................', this.inputListeners);
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})

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