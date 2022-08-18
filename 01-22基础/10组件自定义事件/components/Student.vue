<template>
  <div class="demo">
    <h2>我是一个{{msg}}的学生</h2>
    <h3 >姓名：{{name}}</h3>
    <h3>年龄：{{myAge}}</h3>
    <h3>性别：{{sex}}</h3>
    <h2>{{num}}</h2>
    <button @click="addNum">点我num+1</button>
    <button @click="addAge">尝试年龄+1</button>
    <button @click="sendStudentName" >把学生名给App</button>
    <button @click="unbind">解绑阿泰硅谷事件 </button>
    <button @click="death">销毁student组件实例</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            msg:'NCWU',
            myAge:this.age,
            num:0
        }
    },
    props:{
        name:{
            type:String,
        },
        age:{
            type:Number,
            default:24,
        },
        sex:{
            type:String,
        },
        
    },
    methods:{
        addAge(){
            this.myAge++
        },
        addNum(){
            this.num++
        },
        sendStudentName(){
            this.$emit('atguigu',this.name,'rws',20,'running')
            // this.$emit('demo')
        },
        unbind(){
            this.$off('atguigu')//解绑一个事件
            // this.$off('atguigu','demo')//解绑多个事件
            // this.$off()//解绑所有的
        },
        
        death(){
            this.$destroy()
        }
    }
}
</script>

<style>
    .demo{
        background-color: skyblue;
    }
</style>