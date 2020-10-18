<template>
  <div>
    <h1>TodoList</h1>
    <input @keyup.enter="addTodo" type="text" v-model="content"></input>
    <button @click="addTodo">添加</button>
    <ul>
      <li v-for="(item, index) of todoData" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  import img from './assets/images/timg.jpg';
  import './assets/styles/test.css';
  import './assets/styles/global.styl';
  export default {
    name: 'App',
    data() {
      return {
        todoData: ['todo1', 'todo2', 'todo3'],
        content: ''
      }
    },
    created() {
      console.log('img...........', img);
      console.log('[]...........', [1, 2, 3].map(item => item + 1));
    },
    methods: {
      addTodo() {
        if (this.content !== '') {
          this.todoData.push(this.content);
          this.content = '';
        }
        return;
      },
    }
  }
</script>

/**
lang 属性表示样式使用stylus格式
scoped 属性表示样式仅仅只影响当前的文件
*//
<style lang="stylus" scoped>
  h1
    color: red // transform: translate(100px, 100px)
  li:nth-of-type(odd)
    color: blue
</style>