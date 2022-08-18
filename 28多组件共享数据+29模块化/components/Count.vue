<template>
  <div>
    <h1>当前求和为:{{sum}}</h1>
    <h1>当前求和放大十倍为:{{bigSum}}</h1>
    <h1>学校:{{school}}</h1>
    <h1>专业:{{subject}}</h1>
    <h3 style="color: red">Person组件学生人数：{{personsObj.length}}</h3>
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

        ...mapState('countAbout', ['sum','school','subject']),
        ...mapState('personAbout', ['personsObj']),
        ...mapGetters('countAbout',['bigSum']),

    },
    methods:{
        ...mapMutations('countAbout',['INCREMENT','DECREMENT']),

        ...mapActions('countAbout',['incrementOdd','incrementWait'])
    },
}
</script>
<style>

</style>