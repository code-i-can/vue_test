<template>
  <div>
    <ul>
        <li v-for="m in msgs" :key="m.id" >
            <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

            <router-link :to="{
                    // path:'/home/message/detail',
                    
                    // 简写
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">
                    {{m.title}}
            </router-link>
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
}
</script>

<style>

</style>