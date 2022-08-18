<template>
  <div>
    <el-form>
        <el-form-item label="活动名称">
            <el-input></el-input>
        </el-form-item>
         <el-form-item label="活动区域" prop="region">
            <el-select  placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="活动时间" >
            <el-date-picker type="date" placeholder="选择日期"  ></el-date-picker>-
            <el-time-picker placeholder="选择时间" ></el-time-picker>    
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
            <el-switch ></el-switch>
        </el-form-item>

        <el-form-item label="活动性质" ><!--不显示 -->
            <el-checkbox-group >
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
            <el-radio-group >
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
            <el-input type="textarea" ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" >立即创建</el-button>
            <el-button >重置</el-button>
        </el-form-item>
        
    </el-form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>