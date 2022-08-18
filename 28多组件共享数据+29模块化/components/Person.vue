<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为:{{sum}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="addPerson">添加</button>
    <button @click="addPersonRen">添加一个姓任的人</button>
    <button @click="addPersonServer">添加名字随机的人</button>
    <button @click="firstPersonName">第一个人的姓名</button>
    <ul>
        <li v-for="p in personsObj" :key="p.id" >{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {  mapState } from 'vuex'

export default {
    data() {
        return {
            name: '',
        }
    },
    computed:{
        // sum(){
        //     return this.$store.state.sum
        // },
        // personList(){
        //     return this.$store.state.personsObj;
        // },
        ...mapState('countAbout', ['sum']),
        ...mapState('personAbout', ['personsObj']),
    },
    methods:{
            addPerson(){
				
				this.$store.commit('personAbout/ADD_PERSON',this.name)
				this.name = ''
			},
            addPersonRen(){
                this.$store.dispatch('personAbout/addPersonRen',this.name)
                this.name = ''
            },
            addPersonServer(){
                this.$store.dispatch('personAbout/addPersonServer')
                this.name = ''
            },
            firstPersonName(){
                // console.log(this.$store)
                this.$store.getters['personAbout/firstPersonName']
            }
            
    }
}
</script>

<style>

</style>