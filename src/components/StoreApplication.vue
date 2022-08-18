<template>
  <div>
    <el-form label-width="100px" :label-position="labelPosition" :mobel="form">
      <el-row>
        <el-col :span="8">
          <el-form-item label="店铺名称:" prop="storeName">
            <el-input
              size="medium"
              autocomplete="off"
              placeholder="请输入10个字以内的店铺名称"
              v-model="form.storeName"
            >
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="资质图片:" prop="storePicture">
            请上传资质相关图片，支持的图片格式 .jpg .png
            <el-upload
              action="#"
              :limit="6"
              list-type="picture-card"
              :auto-upload="false"
              :on-success="handleSuccess"
              :before-upload="beforeUpload"
            >
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{ file }">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
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
  name: "StoreApplication",
  data() {
    return {
      form: {
        storeName: "",
        storePictureUrl: [],
      },
      labelPosition: "right",
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      // rules: {
      //   storeName: [
      //     { required: true, message: "请输入店铺名称", trigger: "blur" },
      //     { max: 10, message:'店铺名称须在10个字以内', trigger: "change" }
      //   ],
      //   storePicture: [{ required: true, message: "请上传资质相关图片" }],
      // },
    };
  },
  methods: {
    confirmSubmit() {
      console.log("yes,submit");
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    handleSuccess() {},
    beforeUpload() {},
  },
};
</script>

<style>
</style>