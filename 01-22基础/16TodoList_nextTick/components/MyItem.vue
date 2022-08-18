<template>
  <div>
    <li>
        <label>
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <!-- <input type="checkbox" v-model="todo.done" /> -->
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input type="text" 
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo,$event)"
        ref="inputTitle"
        >
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
    name:'MyItem',
    props:['todo'],
    methods:{
        handleCheck(id){
            this.$bus.$emit('checkTodo',id)
        },

        // handleCheck(nowDone){
        //     this.todo.done = !nowDone
        // },

        handleEdit(todo){
          if(todo.hasOwnProperty('isEdit')){
            todo.isEdit = true
          }else{
            this.$set(todo,'isEdit',true)
          }
          //官方推荐获取焦点
          this.$nextTick(function(){
            this.$refs.inputTitle.focus()
          })

          // setTimeout(()=>{
          //   this.$refs.inputTitle.focus()
          // })
        },

        handleBlur(todo,e){
          todo.isEdit = false
          if(!e.target.value.trim()) return alert('输入不能为空')
          let title = e.target.value.trim() 
          this.$bus.$emit('updateTodo',todo.id,title)//更改todo的title
        },

        handleDelete(id){
            if(confirm('确定删除吗？')){
                // this.$bus.$emit('deleteTodo',id)
                PubSub.publish('deleteTodo',id)
            }
        },
    },
}
</script>

<style scoped>

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
    background-color: #ddd;
}
li:hover button{
    display: block;
}
</style>