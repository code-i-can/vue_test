<template>
  <div>
    <ul>
      <li :style="{opacity}">欢迎学习Vue</li>
        <li>news001</li>
        <input type="text">
        <li>news002</li>
        <input type="text">
        <li>news003</li>
        <input type="text">
    </ul>
  </div>
</template>

<script>
export default {
    name:'New',
    data() {
      return {
        opacity:1
      }
    },
    // beforeDestroy(){
    //     console.log('New组件被销毁了')
    // },
    activated(){
      // console.log('New组件被激活了')
      this.timer = setInterval(()=>{
        // console.log('@')
        this.opacity -= 0.1
        if(this.opacity<=0)  this.opacity = 1
      },16)
    },
    deactivated(){
        // console.log('New组件被冻结了')
        clearInterval(this.timer)
    }
}
</script>

<style>

</style>