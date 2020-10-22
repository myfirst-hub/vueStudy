<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="what to do?"
      autofocus
      v-model="content"
      @keyup.enter="addTodo"
    />
    <todo-item
      v-for="(item,index) in filterData"
      :key="index"
      :todo="item"
      @del="handleDelete"></todo-item>
      <todo-info
        :total="total"
        @toggleState="handleToggleState"
        @clearCompleted="handleClear"></todo-info>
  </div>
</template>

<script>
import TodoItem from './coms/TodoItem.vue';
import TodoInfo from './coms/TodoInfo.vue';
let id = 0;
export default {
  name: 'MainTodo',
  data() {
    return {
      todoData:[],
      content: '',
      total: 0,
      filter: 'all'
    }
  },
  methods: {
    addTodo(){
      console.log('this.content.........', this.content)
      if (!this.content) return;
      this.todoData.unshift({
        id: id++,
        content: this.content,
        completed: false
      });
      this.content = '';
    },
    handleDelete(id){
      this.todoData.splice(this.todoData.findIndex(item => item.id === id), 1);
    },
    handleToggleState(state){
      this.filter = state
    },
    handleClear(){
      this.todoData = this.todoData.filter(item => item.completed == false)
    },
  },
  computed: {
    filterData(){
      switch(this.filter){
        case 'all':
          return this.todoData
          break
        case 'active':
          return this.todoData.filter(item => item.completed == false)
          break
        case 'completed':
          return this.todoData.filter(item => item.completed == true)
          break
      }
    }
  },
  watch: {
    todoData: {
      deep: true,
      handler(){
        this.total = this.todoData.filter(item => item.completed === false).length
      }
    }
  },
  components: {
    TodoItem,
    TodoInfo
  }
}
</script>

<style lang="stylus" scoped>
  .main-todo
    width: 600px
    margin: 0 auto
    background-color: #fff
    box-shadow: 0 0 5px #666
    .add-todo
      font-size: 24px
      font-weight: inherit
      font-family: inherit
      color: inherit
      border: none
      outline: none
      width: 100%
      padding: 16px 16px 16px 36px
      box-sizing: border-box
</style>