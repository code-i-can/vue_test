<template>
  <div>
    <ul>
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
    beforeDestroy(){
        console.log('New组件被销毁了')
    },
}
</script>

<style>

</style>