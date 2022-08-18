<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">显示名称</button>
  </div>
</template>

<script>

    import {hunhe} from '../mixin'

    export default {
        name:'School',
        data(){
            return {
                name:'NCWU',
                address:'金水东路136号',
            }
        },
        methods:{
                
        },
        mixins:[hunhe]
    }   
</script>

<style>
    .school{
        background-color: skyblue;
    }
</style>