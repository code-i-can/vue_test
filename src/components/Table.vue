<template>
    <div>
        
        <el-form :inline="true" :model="searchFormData" >

            <el-form-item label="日期">
                <el-date-picker
                v-model="searchFormData.date"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期" />
            </el-form-item>
            
            <el-form-item label="姓名">
                <el-input  placeholder="姓名" v-model="searchFormData.name"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-select  placeholder="地址" value="" v-model="searchFormData.address">
                <!-- <el-option label="上海" value="上海"></el-option>
                <el-option label="北京" value="北京"></el-option> -->
                <el-option v-for="(p,index) in provinces" :key="index" :label="p" :value="p" ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>
        
        <el-button type="primary" size="mediun" @click="add">新增</el-button>&nbsp;
        <el-button type="info" @click="test">测试</el-button>

        <el-dialog title="学生信息" :visible.sync="addVisible">
            <el-form >
                <el-form-item label="日期" prop="time" :label-width="formLabelWidth">
                    <el-date-picker 
                        v-model="formData.date"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                <el-input v-model="formData.address"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addVisible = false">取 消</el-button>
                <el-button type="primary" @click="addFinish">确 定</el-button>
            </div>
        </el-dialog>

        <el-table :data="computeData" >
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                width="360"
                >
            </el-table-column>
            <el-table-column 
                label="操作"
                width="200"
                >
                <template slot-scope="rowData">
                    <!-- Form -->
                    <el-button type="primary" size="mediun" @click="edit(rowData.row)">编辑</el-button>&nbsp;
                    
                    <el-dialog title="学生信息" :visible.sync="dialogFormVisible">
                        <el-form >
                            <el-form-item label="姓名" :label-width="formLabelWidth">
                            <el-input v-model="formData.name"></el-input>
                            </el-form-item>
                            <el-form-item label="地址" :label-width="formLabelWidth">
                            <el-input v-model="formData.address"></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="editFinish">确 定</el-button>
                        </div>
                    </el-dialog>
                    <el-button type="danger" size="mediun" @click="del(rowData.row.id)">删除</el-button>
                    
                </template> 
            </el-table-column>
        </el-table>

        <el-pagination
        v-show="totalPageSize>0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        
        :page-sizes="pageSizes"
        :page-size="pageSize" 
        :total="totalPageSize"
        prev-text="上页"
        next-text="下页"
        layout="total, sizes, prev, pager, next, jumper"
        >
        </el-pagination>
    </div>
    
</template>

<script>
import parseTime from '../utils/parseTime'
import { nanoid } from 'nanoid';
    export default {
    data() {
        return {
            tableData: [{
                    id:1001,
                    date: "2022-08-02",
                    name: "青蛙",
                    address: "天津"
                },
                {
                    id:1059,
                    date: "2022-08-02",
                    name: "王五",
                    address: "上海市"
                },
                {
                    id:nanoid(),
                    date: "2022-08-04",
                    name: "入围赛",
                    address: "浙江杭州"
                },
                {
                    id:1046,
                    date: "2022-08-02",
                    name: "厄尔",
                    address: "河南郑州"
                },
                {
                    id:1801,
                    date: "2022-08-02",
                    name: "荣荣",
                    address: "四川成都"
                },
                {
                    id:1901,
                    date: "2022-08-02",
                    name: "涛涛",
                    address: "江苏无锡"
                },
                {
                    id:2001,
                    date: "2022-08-02",
                    name: "英语",
                    address: "北京中关村"
                },
                {
                    id:1069,
                    date: "2022-08-02",
                    name: "uu",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    id:17601,
                    date: "2022-08-02",
                    name: "ii",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    id:nanoid(),
                    date: "2022-08-02",
                    name: "何晨光",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    id:nanoid(),
                    date: "2022-08-01",
                    name: "壮壮",
                    address: "上海市普陀区金沙江路 1518 弄"
                }, {
                    id:1002,
                    date: "2022-08-04",
                    name: "张三",
                    address: "上海市普陀区金沙江路 1517 弄"
                }, {
                    id:1003,
                    date: "2022-08-01",
                    name: "刘星",
                    address: "上海市普陀区金沙江路 1519 弄"
                }, {
                    id:1005,
                    date: "2022-07-01",
                    name: "李雷",
                    address: "河南省焦作市金沙江路 1519 弄"
                },{
                    id:nanoid(),
                    date: "2022-06-01",
                    name: "李二牛",
                    address: "安徽省普陀区金沙江路 1519 弄"
                },{
                    id:1004,
                    date: "2022-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄"
            }],
            searchedData :[],
            formData: {
                    id:'',
                    date: '',
                    name: '',
                    address: '',
            },
            unData:{
                id:'',
                date: '',
                name: '',
                address: '',
            },
            searchFormData: {
                date: '',
                name: '',
                address: '',
            },
            list:[],
            showList:[],
            provinces : ["北京", "天津", "上海", "重庆", "新疆", "西藏", "宁夏", "内蒙古",
             "广西", "黑龙江", "吉林", "辽宁", "河北", "山东", "江苏", "安徽",
             "浙江", "福建", "广东", "海南", "云南", "贵州", "四川", "湖南",
             "湖北", "河南", "山西", "陕西", "甘肃", "青海", "江西", "台湾", "香港", "澳门"],
            listLoading:true,
            listQuery:{
                page: 1,
                limit: 20,
                date:undefined,
                name:undefined,
                address:undefined,
            },
            isTableData:true,
            currentPage:1,
            pageSizes:[5, 10, 15, 20],
            pageSize:5,
            addVisible:false,
            dialogFormVisible: false,
            formLabelWidth: '120px',
            format:'{y}-{m}-{d}'
        };
    },
    mounted(){
        this.list = [...this.tableData]
        const tempList = [...this.list]
        if(tempList) this.showList = tempList.splice(0,5)
    },  
    methods: {
        test(){
            // const time =parseTime(new Date(),'{y}-{m}-{d}')
            // console.log(time)
            // console.log(this)
        },
        
        add(){
            this.addVisible = true
        },
        addFinish(){
            this.addVisible = false
            this.formData.id = nanoid()
            this.formData.date =  this.formData.date ? parseTime(this.formData.date,this.format) : parseTime(new Date(),this.format)
            this.tableData.unshift(this.formData)
            this.formData = {...this.unData}
        },
        edit(row) {
            console.log(row)
            this.dialogFormVisible = true
            this.formData = {...row}
        },
        editFinish(){
            this.dialogFormVisible = false
            this.tableData.forEach((stuObj)=>{
                if(stuObj.id === this.formData.id)
                {
                    stuObj.date = parseTime(new Date(),this.format)
                    stuObj.name = this.formData.name
                    stuObj.address = this.formData.address
                    return 
                }
            })
            this.formData = {...this.unData}
        },
        del(id) {
            this.$confirm("确认删除", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                this.tableData.forEach((stuObj,index)=>{
                    if(stuObj.id == id)
                    {
                        this.tableData.splice(index,1)
                        return 
                    }
                })
                this.$message({
                    type: "success",
                    message: "删除成功!"
                });
            }).catch(() => {
                this.$message({
                    type: "info",
                    message: "已取消删除"
                });
            });
        },
        search(){
            if(this.searchFormData.date){
                this.searchFormData.date[0] = parseTime(this.searchFormData.date[0],this.format)
                this.searchFormData.date[1] = parseTime(this.searchFormData.date[1],this.format)
            }
            this.searchedData = this.tableData.filter((s)=>{
                    // debugger

                        if((s.name===this.searchFormData.name)
                        &&(s.address===this.searchFormData.address)
                        &&((this.searchFormData.date[0]<=s.date
                        &&this.searchFormData.date[1]>=s.date)))
                        return s
                        if((this.searchFormData.name!==''&&s.name===this.searchFormData.name)
                        ||(this.searchFormData.address!==''&&s.address===this.searchFormData.address)
                        ||(this.searchFormData.date.length===2&&(this.searchFormData.date[0]<=s.date
                        &&this.searchFormData.date[1]>=s.date)))
                        return s
            })
            if(this.searchedData.length==0) 
            {
                this.isTableData = true
            }
            else if(this.searchedData.length>0)
            {
                this.isTableData = false
            }
        },
        handleSizeChange(val)
        {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val)
        {
            this.currentPage = val
            console.log(`当前页: ${val}`);
            const start = (val-1) * 5
            this.showList = this.list.splice(start,5)
        },
        showData(){
            if(this.isTableData){
                this.list=[...this.tableData]
            }else{
                this.list=[...this.searchedData]
            }
        },
    },
    
    computed:{
        computeData(){
            this.showData()
            const tempList = [...this.list]
            const start = (this.currentPage-1) * 5
            return this.showList = tempList.splice(start,5)        
        },  
        totalPageSize(){
            return this.list ? this.list.length : 0
        },
    }
}
</script>

<style>

</style>