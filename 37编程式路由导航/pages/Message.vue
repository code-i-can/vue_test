<template>
  <div>
    <ul>
        <li v-for="m in msgs" :key="m.id" >
            <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

            <router-link :to="{
                    // path:'/home/message/detail', //params下不能用
                    
                    // 简写
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">
                    {{m.title}}
            </router-link>

            <button @click="pushShow(m)">push查看</button>
            <button @click="replaceShow(m)">replace查看</button>
        </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msgs:[
                {id:'001',title:'message001'},
                {id:'002',title:'message002'},
                {id:'003',title:'message003'},
            ]
        }
    },
    methods: {
        pushShow(m){
            this.$router.push({
                name:'xiangqing',
                query:{
                    id:m.id,
                    title:m.title
                }
            })
        },
        replaceShow(m){
            this.$router.replace({
                name:'xiangqing',
                query:{
                    id:m.id,
                    title:m.title
                }
            })
        },
    },



}
</script>

<style>

</style>