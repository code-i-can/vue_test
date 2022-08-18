<template>
  <div>
    <el-form>
      <el-form-item label="选择日期:">
        <el-date-picker
          v-model="searchDate"
          type="daterange"
          range-separator="~"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />

        <el-button style="margin-left:50px" class="searchButtonBox" icon="el-icon-search" type="danger" @click="search">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="pageList"
      :stripe="true"
      :highlight-current-row="true"
      style="width: 100%"
    >
      <el-table-column prop="name" label="会员姓名" align="center" width="150">
      </el-table-column>
      <el-table-column
        prop="date"
        label="积分变动时间"
        align="center"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="changeNum"
        label="变动数额"
        align="center"
        width="100"
      >
        <!-- <template >
          +字体颜色
        </template> -->
      </el-table-column>
      <el-table-column
        prop="changeReason"
        label="变动原因"
        align="center"
        width="500"
      >
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="page"
      :page-size="3"
      :page-sizes="computedTotal<3 ? [computedTotal] : [3, 5, 10]"
      :pager-count="7"
      :total="computedTotal"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      layout="sizes, total, prev, pager, next, jumper"
    >
    </el-pagination>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import parseDateTime from '../utils/parseTime'
export default {
  data() {
    return {
      total: 0,
      page: 1,
      limit: 3,
      searchDate: [],
      tableData: [
        {
          id: nanoid(),
          name: "老赵",
          date: "2020-12-31 15:26",
          changeNum: '+100',
          changeReason: "惠民商城销售，销售订单编号3268495198432496584231",
        },
        {
          id: nanoid(),
          name: "老李",
          date: "2020-12-31 15:26",
          changeNum: "-50",
          changeReason: "约车",
        },
        {
          id: nanoid(),
          name: "张三",
          date: "2020-12-31 15:26",
          changeNum: "-20",
          changeReason: "约车",
        },
        {
          id: nanoid(),
          name: "张三",
          date: "2020-12-31 15:26",
          changeNum: "-20",
          changeReason: "约车",
        },
        {
          id: nanoid(),
          name: "入围赛",
          date: "2015-10-02  15:26",
          changeNum: "+199",
          changeReason:
            "惠民商城购买鲁花香飘万家浓香花生油6.08L5S压榨一级 食用油  【量大从优】",
        },
        {
          id: nanoid(),
          name: "阿根廷",
          date: "2022-8-02  15:26",
          changeNum: +"100",
          changeReason: "阿根廷获胜",
        },
        {
          id: nanoid(),
          name: "欧文",
          date: "2022-8-03  15:26",
          changeNum: "-500",
          changeReason: "不打疫苗",
        },
        {
          id: nanoid(),
          name: "小卡",
          date: "2022-8-01  15:26",
          changeNum: "+500",
          changeReason: "伤病赛季报销",
        },
        {
          id: nanoid(),
          name: "张三",
          date: "2021-8-01  15:26",
          changeNum: "+100",
          changeReason: "惠民商城销售",
        },
        {
          id: nanoid(),
          name: "张三",
          date: "2021-8-01  15:26",
          changeNum: "+100",
          changeReason: "惠民商城销售",
        },
        {
          id: nanoid(),
          name: "张三",
          date: "2021-8-01  15:26",
          changeNum: "+100",
          changeReason: "惠民商城销售",
        },
        {
          id: nanoid(),
          name: "张三",
          date: "2021-8-01  15:26",
          changeNum: "+100",
          changeReason: "惠民商城销售",
        },
        {
          id: nanoid(),
          name: "张三",
          date: "2021-8-01  15:26",
          changeNum: "+100",
          changeReason: "惠民商城销售",
        },
        {
          id: nanoid(),
          name: "张三",
          date: "2021-8-01  15:26",
          changeNum: "+100",
          changeReason: "惠民商城销售",
        },
        {
          id: nanoid(),
          name: "张三",
          date: "2021-8-01  15:26",
          changeNum: "+100",
          changeReason: "惠民商城销售",
        },
        {
          id: nanoid(),
          name: "张三",
          date: "2021-8-01  15:26",
          changeNum: "+100",
          changeReason: "惠民商城销售",
        },
        {
          id: nanoid(),
          name: "张三",
          date: "2021-8-01  15:26",
          changeNum: "+100",
          changeReason: "惠民商城销售",
        },
        {
          id: nanoid(),
          name: "张三",
          date: "2021-8-01  15:26",
          changeNum: "+100",
          changeReason: "惠民商城销售",
        },
        {
          id: nanoid(),
          name: "张三",
          date: "2021-8-01  15:26",
          changeNum: "+100",
          changeReason: "惠民商城销售",
        },
        {
          id: nanoid(),
          name: "张三",
          date: "2021-8-01  15:26",
          changeNum: "+100",
          changeReason: "惠民商城销售",
        },
        {
          id: nanoid(),
          name: "张三",
          date: "2021-8-01  15:26",
          changeNum: "+100",
          changeReason: "惠民商城销售",
        },

      ],
      searchList: [],
      showList: [],
      pageList: [],
      format:'{y}-{m}-{d}'
    };
  },
  mounted() {
    this.showList = [...this.tableData];
    this.handleCurrentChange();
  },
  computed: {
    computedTotal() {
      return this.showList.length ? this.showList.length : 0;
    },
  },
  methods: {
    search(){
      const {searchDate} = this
      //为空
      if(searchDate==null){
        this.showList = [...this.tableData]
        this.handleCurrentChange(1)
        return ;
      }else{
        searchDate[0] = parseDateTime(searchDate[0],this.format)
        searchDate[1] = parseDateTime(searchDate[1],this.format)
      }
      //为0
      if(searchDate[0]=="0-0-0"||searchDate[1]=="0-0-0")
      {
        this.showList = [...this.tableData]
        this.handleCurrentChange(1)
        return ;
      }
      this.searchList = this.tableData.filter((item)=>{
        item.date = parseDateTime(item.date,this.format)
        if(item.date>=searchDate[0]&&item.date<=searchDate[1])
          return true
      })
      this.showList = [...this.searchList]
      this.handleCurrentChange(1)
    },
    handleCurrentChange(currentPage = 1) {
      this.page = currentPage;
      let tmpList = [...this.showList];
      if (tmpList) this.pageList = tmpList.splice(currentPage - 1, this.limit);
    },
    handleSizeChange(currentLimit) {
      this.limit = currentLimit;
      this.handleCurrentChange();
    },
  },
};
</script>

<style>
/* .search{
    background-color: #FF5107;
    height: 30px;
    color: white;
    font-size: 14;
    border-radius: 5px;
}
dateInput{
    height: 40px;
} */

/* el-button*/
.searchButtonBox {
  width: 100px;
  height: 30px;
} /* 按钮--查询*/
.el-button--danger {
  background-color: #FF5107;
  border-color: #FF5107;
  font-size: 16px;
} /* 按钮颜色和边框颜色*/
.el-button--danger:hover {
  background-color: #ff7439;
  border-color: #ff7439;
} /* 悬停时按钮颜色*/
.el-button--text.b {
  color: #999999;
  text-decoration: underline;
  font-size: 16px;
}
.el-button--text.a {
  color: #FF5107;
  text-decoration: underline;
  font-size: 16px;
}
</style>
