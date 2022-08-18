<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
    export default {
        data(){
            return {
                name:'NCWU',
                address:'金水东路136号',
            }
        },
        mounted() {
            this.pubID = pubsub.subscribe('hello',(msgname,data)=>{
                console.log(this)
                console.log('有人发布了hello消息,hello消息的回调执行了',msgname,data)
            })
        },
        beforeDestroy(){
            pubsub.unsubscribe(this.pubID)
        }
    }   
</script>

<style>
    .school{
        background-color: skyblue;
    }
</style>