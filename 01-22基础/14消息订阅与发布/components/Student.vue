<template>
  <div class="demo">
    <h3 >姓名：{{name}}</h3>
    <h3>年龄：{{age}}</h3>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    data(){
        return{
            name:'rws',
            age:18,
        }
    },
    methods:{
        sendStudentName(){
            pubsub.publish('hello',666)
        },
    },
    
}
</script>

<style>
    .demo{
        background-color: skyblue;
    }
</style>