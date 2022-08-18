<template>
  <div class="demo">
    <h3 >姓名：{{name}}</h3>
    <h3>年龄：{{age}}</h3>
    <h3>性别：{{sex}}</h3>
    <button @click="demo">点我demo</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            name:'华小水',
            age:19,
            sex:'男',
        }
    },
    mounted() {
            this.$bus.$emit('hello',this.name)
        },
    methods:{
        demo(){
            this.$bus.$emit('hello','我是一个demo')
        }
    }
}
</script>

<style>
    .demo{
        background-color: skyblue;
    }
</style>