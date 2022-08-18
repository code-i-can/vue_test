<template>
  <div class="demo">
        <h3>{{title}}分类</h3>
        <slot>我是一个默认值</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
}
</script>

<style scoped>
.demo{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    background-color: orange;
    text-align: center;
}

</style>