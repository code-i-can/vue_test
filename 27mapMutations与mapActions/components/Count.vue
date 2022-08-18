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
    <button @click="INCREMENT(n)">+</button>&nbsp;
    <button @click="DECREMENT(n)">-</button>&nbsp;
    <button @click="incrementOdd(n)">奇数加</button>&nbsp;
    <button @click="incrementWait(n)">等一等再加</button>&nbsp;
  </div>
</template>
<script>
import { mapState,mapGetters, mapMutations, mapActions, } from 'vuex'
export default {
    data() {
        return {
            n:1,
        }
    },
    computed:{
        // ...mapState({xuexiao:'school',zhuanye:'subject'})

        ...mapState(['sum','school','subject']),

        ...mapGetters(['bigSum']),

    },
    methods:{
        ...mapMutations(['INCREMENT','DECREMENT']),

        ...mapActions(['incrementOdd','incrementWait'])
    },
}
</script>
<style>

</style>