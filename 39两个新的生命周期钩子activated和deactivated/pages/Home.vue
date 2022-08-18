<template>
  <div>
    <h3>我是Home的内容</h3>
    <ul class="nav nav-tabs">
      <li>
        <router-link class="list-group-item " active-class="active" to="/home/new">News</router-link>
      </li>
      <li>
        <router-link class="list-group-item " active-class="active" to="/home/message">Message</router-link>
      </li>
    </ul>
    <!-- <keep-alive :include="['Message','New']"> //多个路由缓存 方式一
      <router-view></router-view>
    </keep-alive> -->

    <keep-alive include="Message,New">  //多个路由缓存 方式二 两组间不能有空格 注意：一定要是组件的name！！！
      <router-view></router-view>
    </keep-alive>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>