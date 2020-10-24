<template>
  <div>
    <!-- <h3>当前最新的count值为：{{ count }}</h3> -->
    <h3>{{ showNum }}</h3>
    <button @click="btnAddHandler">-1</button>
    <button @click="btnAddHandlerN">-N</button>
    <button @click="btnAddHandlerAsync">-Async</button>
    <button @click="btnAddHandlerAsyncN">-AsyncN</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
console.log('mapState.................', mapState)
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subAsyncN']),
    btnAddHandler() {
      this.sub()
    },
    btnAddHandlerN() {
      this.subN(3)
    },
    btnAddHandlerAsync() {
      this.subAsync()
    },
    btnAddHandlerAsyncN() {
      this.subAsyncN(3)
    }
  }
}
</script>
