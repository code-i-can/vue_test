<template>
  <div>
    <h1>当前求和为:{{sum}}</h1>
    <h1>当前求和放大十倍为:{{bigSum}}</h1>
    <h1>学校:{{school}}</h1>
    <h1>专业:{{subject}}</h1>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>&nbsp;
    <button @click="increment">+</button>&nbsp;
    <button @click="decrement">-</button>&nbsp;
    <button @click="incrementOdd">奇数加</button>&nbsp;
    <button @click="incrementWait">等一等再加</button>&nbsp;
  </div>
</template>
<script>
import { mapState,mapGetters } from 'vuex'
export default {
    data() {
        return {
            n:1,
        }
    },
    computed:{
        // ...mapState({xuexiao:'school',zhuanye:'subject'})

        ...mapState(['sum','school','subject']),

        ...mapGetters(['bigSum'])

    },
    methods:{

        

        increment(){
            this.$store.commit('increment',this.n)
        },
        decrement(){
            this.$store.commit('decrement',this.n)
        },
        incrementOdd(){
            this.$store.dispatch('incrementOdd',this.n)
        },
        incrementWait(){
            setTimeout(()=>{
                this.$store.dispatch('incrementWait',this.n)
            })
        }
    },
}
</script>
<style>

</style>