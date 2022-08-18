<template>
  <div>
    <h2 v-text="msg" ref="title"></h2>
    <button ref="btn" @click="showDOM">点我输出DOM元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>

    import School from './components/School'

    export default {
        name:'App',
        components:{School},
        data(){
            return{
                msg:'你好呀',
            }
        },
        methods:{
            showDOM(){
                console.log(this.$refs.title)
                console.log(this.$refs.btn)
                console.log(this.$refs.sch)
            }
        }
    }
</script>
