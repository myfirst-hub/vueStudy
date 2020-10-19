<template>
<div>
  <main-header></main-header>
</div>
</template>

<script>
import './assets/styles/global.styl';

import MainHeader from './components/MainHeader.vue'
export default {
  name: 'App',
  components: {
    // 组件名：组件对象
    MainHeader
  },
  // data() {},
  // created() {},
  // methods: {

  // }
}
</script>

/**
lang 属性表示样式使用stylus格式
scoped 属性表示样式仅仅只影响当前的文件
*//

<style lang="stylus" scoped>
</style>
