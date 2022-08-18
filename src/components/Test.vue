<template>
  <div>
    <el-container>
  <el-aside  width="200px">
    <NavMenu/>
  </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
  </div>
</template>

<script>
import NavMenu from './NavMenu.vue'
export default {
    name:'Test',
    components: { NavMenu }
}
</script>

<style>
  .el-header, .el-footer {
    
    
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    height: 700px;
    
    
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>