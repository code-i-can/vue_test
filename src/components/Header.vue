<template>
  <div >
    <el-row >
        <el-col :span="4" >
        <i class="el-icon-s-promotion" ></i>
        </el-col>
        <el-col :span="20">
            <el-menu default-active="1" class="el-menu-demo" mode="horizontal" >
                <el-menu-item index="1">主页</el-menu-item>
                <el-menu-item index="2">新闻</el-menu-item>
                <el-menu-item index="3">论坛</el-menu-item>
                <el-submenu index="4">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                    <el-menu-item index="4-3">选项3</el-menu-item>
                    <el-submenu index="4-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="4-4-1">选项1</el-menu-item>
                    <el-menu-item index="4-4-2">选项2</el-menu-item>
                    <el-menu-item index="4-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>