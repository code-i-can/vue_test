<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" v-model="keywords" placeholder="enter the name you search"/>&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
</template>

<script>
export default {
    name:'Search',
    data() {
        return {
            keywords:'',
        }
    },
    methods:{
        searchUsers(){
            console.log(this)
            this.$bus.$emit('getUsers',{isLoading:true, isFirst:false, errMsg:'',users:[]})
            this.$http.get(`https://api.github.com/search/users?q=${this.keywords}`).then(
                response => {
                    
                    // console.log('请求成功了')
                    console.log(response.data.items)
                    this.$bus.$emit('getUsers',{isLoading:false ,errMsg:'', users:response.data.items})
                },
                error => {
                    // console.log('请求失败了',error.message)
                    this.$bus.$emit('getUsers',{isLoading:false ,errMsg:error.message, users:[]})
                },
            )
        },
        
    }
}
</script>
