<template>
  <div>
    <!-- <h3>当前最新的count值为：{{ $store.state.count }}</h3> -->
    <h3>{{ $store.getters.showNum}}</h3>
    <button @click="btnAddHandler">+1</button>
    <button @click="btnAddHandlerN">+N</button>
    <button @click="btnAddHandlerAsync">+Async</button>
    <button @click="btnAddHandlerAsyncN">+AsyncN</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    btnAddHandler() {
      // this.$store.state.count++ // 不可以直接操作Store中的数据
      // console.log('this.$store..............', this.$store)
      this.$store.commit('add')
    },
    btnAddHandlerN() {
      // commit 的作用，就是调用某个 mutation 函数
      this.$store.commit('addN', 5)
    },
    // 异步的让count自增+1
    btnAddHandlerAsync() {
      // 这里的dispatch函数，专门触发某个action
      this.$store.dispatch('addAsync')
    },
    btnAddHandlerAsyncN() {
      // 这里的dispatch函数，专门触发某个action
      this.$store.dispatch('addAsyncN', 5)
    }
  }
}
</script>
