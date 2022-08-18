<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
    export default {
        name:'School',
        data(){
            return {
                name:'NCWU',
                address:'金水东路136号',
            }
        },
        methods:{
            sendSchoolName(){
                this.$emit('atguigu',this.name,666,888)
            }
        }
    }   
</script>

<style>
    .school{
        background-color: skyblue;
    }
</style>