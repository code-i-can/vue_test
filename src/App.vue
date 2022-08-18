<template>
  <div>
    <!-- <Header></Header>
    <el-container>
      <Aside></Aside>
      <Content></Content>
    </el-container> -->

      <!-- <StoreApplication class="store"></StoreApplication> -->
      <plan-form></plan-form>

      <!-- <Releaseproperty></Releaseproperty> -->
      <!-- <router-link active-class="active" to="/home">
        <el-button type="primary" v-show="isShow" @click="isShow = false">切换</el-button>
      </router-link>
      <router-view></router-view> -->
  </div> 


</template>

<script>
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
import Content from './components/Content.vue'
import StoreApplication from './components/StoreApplication.vue'
import PlanForm from './components/PlanForm.vue'
import Releaseproperty from './components/releaseproperty.vue'

export default {
    name: "App",
    components: { Header, Aside, Content, StoreApplication, PlanForm, Releaseproperty },
    data() {
      return {
        isShow:true,
      }
    },
}
</script>

<style>
.store{
  margin-left: 500px;
  margin-top:100px;
}
</style>