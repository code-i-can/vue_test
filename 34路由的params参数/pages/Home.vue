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
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>