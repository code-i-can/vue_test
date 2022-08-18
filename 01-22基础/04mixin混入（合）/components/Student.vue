<template>
  <div class="demo">
    <h2>我是一个{{msg}}的学生</h2>
    <h3 >姓名：{{name}}</h3>
    <h3>年龄：{{myAge}}</h3>
    <h3>性别：{{sex}}</h3>
    <!-- <button @click="addAge">尝试年龄+1</button> -->
    <button @click="showName">显示名称</button>
  </div>
</template>

<script>
import { hunhe } from '../mixin'
export default {
    name:'Student',
    data(){
        return{
            msg:'NCWU',
            myAge:this.age,
        }
    },
    mixins:[hunhe],
    props:{
        name:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            default:24,
        },
        sex:{
            type:String,
            required:true,
        },
        
    },
    methods:{
        addAge(){
            this.myAge++
        },
        
    }
}
</script>

<style>
    .demo{
        background-color: skyblue;
    }
</style>