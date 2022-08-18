<template>
  <div>
    <div class="basicOne">
      <span class="basicInformation">基本信息</span> <!-- 一个标题-->
      <span class="underline"></span> <!-- 标题下划线-->
      <div style="margin:30px 0 0 0">
        <el-form :model="ruleForm" :rules="rulesOne" ref="ruleForm" label-width="130px" >
          <el-form-item label="物产名称:" prop="proName">
            <el-input v-model="ruleForm.proName" class="inputBoxOne" placeholder="请输入商品名称" style="margin-left: 5px"></el-input>
          </el-form-item> <!-- 物产名称-->
          <el-form-item label="物产分类:" required>
            <el-form-item prop="proClassifyOne" style="display: inline-block">
              <el-select v-model="ruleForm.proClassifyOne" placeholder="请选择一级分类" class="selec tBox" style="margin-left: 5px" :popper-append-to-body="false">
                <el-option
                    v-for="item in firstSelection"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="proClassifyTwo" style="display: inline-block">
              <el-select v-model="ruleForm.proClassifyTwo" placeholder="请选择二级分类" class="selectBox" style="margin-left: 15px" :popper-append-to-body="false">
                <el-option
                    v-for="item in secondSelection"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="proClassifyThree" style="display: inline-block">
              <el-select v-model="ruleForm.proClassifyThree" placeholder="请选择三级分类" class="selectBox" style="margin-left: 15px" :popper-append-to-body="false">
                <el-option
                    v-for="item in thirdSelection"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form-item> <!-- 物产分类-->
          <el-form-item label="物产所在详细地址:" class="inputBoxTwo" style="margin-left: 5px">
            <el-input v-model="ruleForm.proAddress"></el-input>
          </el-form-item> <!-- 物产所在详细地址-->
          <el-form-item label="物产详情:">
            <el-input v-model="ruleForm.proDetails" class="inputBoxThree" style="margin-left: 5px"></el-input>
          </el-form-item> <!-- 物产详情-->
        </el-form>
      </div> <!-- 上方信息表格-->
    </div> <!-- 上方-->

    <div class="basicTwo">
      <span class="basicInformation">上传图片</span> <!-- 一个标题-->
      <span class="underline"></span> <!-- 下划线-->
      <div class="tip">最多可上传5张图片，1个视频，在首页展示物产吧！</div>
      <div class="upBox" style="margin: 30px 0 0 0">
        <el-form :model="upForm" :rules="rulesOne" ref="upForm" label-width="130px">
          <el-form-item label="上传多张照片:">
            <el-upload
                class="avatar-uploader"
                action="string"
                style="display: inline-block"
                :on-success="handleSuccess"
                :before-upload="beforeUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              <div class="el-upload__text">上传</div>
              <div class="el-upload__tip" slot="tip" style="font-size: 14px;color: #999999">支持图片格式 .jpg .png</div>
            </el-upload>
          </el-form-item>
        </el-form>
      </div> <!-- 上传图片表格-->
    </div> <!-- 下方-->
  </div>
</template>

<script>

export default {
  name:'ReleaseProperty',
  data(){
    return {
      firstSelection: [{value: '001', label: '粮油谷物'},
        {value: '002', label: '瓜果、干果'},
        {value: '003', label: '干鲜蔬菜'},
        {value: '004', label: '畜、禽类及其副产品'},
        {value: '005', label: '水产、海产及其副产品'},], /* 第一个选择框*/
      secondSelection: [{value: '001', label: '谷类'},
        {value: '002', label: '杂粮'},
        {value: '003', label: '油料'},], /* 第二个选择框*/
      thirdSelection: [{value: '001', label: '小麦'},
        {value: '002', label: '玉米'},
        {value: '003', label: '花生'},], /* 第三个选择框*/
      ruleForm: {
        proName: '',
        proClassifyOne: '',
        proClassifyTwo: '',
        proClassifyThree: '',
        proAddress: '',
        proDetails:''
      }, /* 表单数据*/
      upForm: {
        url:'',
      },
      rulesOne: {
        proName: [
          { required: true, message: '请输入物产名称', trigger: 'blur' }
        ],
        proClassifyOne: [
          { required: true, message: '请进行物产分类', trigger: 'change' }
        ],
        proClassifyTwo: [
          { required: true, message: '请进行物产分类', trigger: 'change' }
        ],
        proClassifyThree: [
          { required: true, message: '请进行物产分类', trigger: 'change' }
        ]
      }, /* 表单发布规则*/
      rulesTwo: {},
      imageUrl: ''
    }
  },
  methods: {
    handleSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    }, /* 上传图片成功的操作*/
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    } /* 上传图片成功之前的操作*/
  }
}


</script>

<style>

.basicOne {
  margin:30px 0 0 200px;
  font-size: 16px;
} /* 页面设计*/

.basicTwo {
  margin:0 0 0 200px;
  color: #999999;
  font-size: 16px;
} /* 页面设计*/

.underline {
  color: #FF5107;
  display:block;
  width:150px;
  padding-bottom: 15px;
  border-bottom: 3px solid #FF5107;
} /* 下划线*/

.basicInformation {
  margin-left: 40px;
  color: #FF5107;
} /* 标题字体*/

.tip {
  margin: 20px 0 0 60px;
  font-size: 14px;
} /* 一个提示行*/

.avatar-uploader .el-upload {
  border: 1px dashed #999999; /* 边缘*/
  height: 100px;
  width: 100px; /*上传模块的尺寸*/
  font-size: 10px;
  color: black;
  background-color: white;
  border-radius: 6px;
} /* 上传框的设计*/
.avatar-uploader .el-upload:hover {
  border-color: #FF5107;
} /* 悬停在上传框时*/
.avatar-uploader-icon {
  font-size: 25px;
  color: #8c939d;
  width: 30px;
  height: 30px;
  line-height: 90px;
  text-align: center;
} /* 上传框内的图标*/
.avatar {
  width: 100px;
  height: 100px;
  display: block;
} /* 上传的图片*/


</style> <!-- 常规和el-upload-->

<style scoped>

.inputBoxOne {
  width: 300px;
}
.inputBoxOne >>> .el-input__inner{
  font-size: 14px !important;
  height: 40px !important;
  border-radius: 5px !important;
} /* 输入框字体，高度，圆角*/
.inputBoxOne >>> .el-input__inner:focus::-webkit-input-placeholder {
  color: transparent !important;
} /* 获取焦点后placeholder内容消失*/
.inputBoxOne >>> .el-input__inner::-webkit-input-placeholder {
  color: #D7D7D7 !important;
} /* placeholder的字体颜色*/
.inputBoxOne >>> .el-input__inner:focus {
  border-color: #28D8B4 !important;
} /* 获得焦点时搜索框外框的颜色*/

.inputBoxTwo {
  width: 745px;
}
.inputBoxTwo >>> .el-input__inner{
  font-size: 14px !important;
  height: 40px !important;
  border-radius: 5px !important;
} /* 输入框字体，高度，圆角*/
.inputBoxTwo >>> .el-input__inner:focus::-webkit-input-placeholder {
  color: transparent !important;
} /* 获取焦点后placeholder内容消失*/
.inputBoxTwo >>> .el-input__inner::-webkit-input-placeholder {
  color: #D7D7D7 !important;
} /* placeholder的字体颜色*/
.inputBoxTwo >>> .el-input__inner:focus {
  border-color: #28D8B4 !important;
} /* 获得焦点时搜索框外框的颜色*/


.inputBoxThree {
  width: 615px;
}
.inputBoxThree >>> .el-input__inner{
  font-size: 14px !important;
  height: 150px !important;
  border-radius: 5px !important;
} /* 输入框字体，高度，圆角*/
.inputBoxThree >>> .el-input__inner:focus::-webkit-input-placeholder {
  color: transparent !important;
} /* 获取焦点后placeholder内容消失*/
.inputBoxThree >>> .el-input__inner::-webkit-input-placeholder {
  color: #D7D7D7 !important;
} /* placeholder的字体颜色*/
.inputBoxThree >>> .el-input__inner:focus {
  border-color: #D7D7D7 !important;
} /* 获得焦点时搜索框外框的颜色*/

</style> <!-- el-input-->

<style scoped>

.selectBox {
  width: 300px;
} /* 选择框*/
.selectBox >>> .el-input__inner:focus{
  border-color: #c0c4cc !important;
} /* 选择框选中时选择框的颜色*/
.selectBox >>> .el-input__inner{
  color: #999999 !important;
} /* 选择框的字体颜色*/
.selectBox >>> .el-select-dropdown__item{
  height: 40px !important;
  font-size: 14px !important;
  color: #999999 !important;
} /* 下拉框选项高度，字体大小与颜色*/
.selectBox >>> .el-select-dropdown__item.selected span{
  color: #FF5107 !important;
} /* 下拉框选择选中后的显示颜色*/
.selectBox >>> .el-select-dropdown{
  margin: 0 !important;
  border:0 !important;
  border-radius: 0 !important;
} /* 下拉框的具体操作*/
.selectBox >>> .el-popper .popper__arrow, .el-popper .popper__arrow::after{
  display: none !important;
} /* 下拉框上方的尖角*/


</style> <!-- el-select-->
