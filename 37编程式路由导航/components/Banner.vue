<template>
  <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
            <button @click="forward">前进</button>
            <button @click="back">后退</button>
            <button @click="go">测试go</button>
      </div>
    </div>
</template>

<script>
export default {
  methods:{
    forward(){
      // console.log(this.$router)
      this.$router.forward()
    },
    back(){
      this.$router.back()
    },
    go(){
      this.$router.go(3)
    }
  }
}
</script>

<style>

</style>