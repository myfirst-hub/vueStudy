<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input
      type="checkbox"
      v-model="todo.completed"
    />
    <label>{{todo.content}}</label>
    <button @click="delItem"></button> 
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      todo: Object
    },
    methods: {
      delItem(){
        this.$emit('del', this.todo.id)
      }
    }
  }
</script>

<style lang="stylus" scope>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'
  .todo-item
    display: flex
    justify-content: space-between
    padding: 10px
    font-size: 24px
    border-top: 1px solid rgba(0, 0, 0, 0.1)
    &:hover
      button:after
        content: 'x'
        font-size: 24px
        color: $lightred
    &.completed
      label
        color: #d9d9d9
        text-decoration: line-through
    input
      width: 50px
      height: 30px
      cleanDefaultStyle()
      text-align: center;
      position: relative;
      top: 5px;
      &:after
        content: url('~images/unchecked.png')
       &:checked:after
        content: url('~images/checked.png')
    label
      flex: 1
      transition: color 0.4s
    button
      width:40px
      cleanDefaultStyle()
      background-color: transparent
      cursor: pointer
</style>