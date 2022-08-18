<template>
  <div>
    <el-form
      label-width="100px"
      :label-position="labelPosition"
      :mobel="form"
    >
      <el-row>
        <el-col :span="8">
          <el-form-item label="店铺名称:" required>
            <el-input
              type="text"
              size="medium"
              placeholder="请输入10个字以内的店铺名称"
              v-model="form.name"
            >
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="资质图片:" required>
            请上传资质相关图片，支持的图片格式 .jpg .png
            <el-upload
              class="avatar-uploader"
              action="#"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <!-- <img v-if="tmForm.logoUrl" :src="tmForm.logoUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
              <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-button
      type="primary"
      @submit="confirmSubmit"
      style="margin-left: 100px; margin-top: 150px"
      >确定</el-button
    >
  </div>
</template>

<script>
export default {
  name: "StoreApplication2",
  data() {
    return {
      form: {},
      dialogImageUrl: "",
      dialogVisible: false,
      labelPosition: "right",
    };
  },
  methods: {
    confirmSubmit() {
      console.log("yes,submit");
    },
  },
};
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>