<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <Test></Test>
  </div>
</template>

<script>
    import Test from './components/TestName.vue'

    export default {
        name:'App',
        components:{
            Test,
        }
    }
</script>
