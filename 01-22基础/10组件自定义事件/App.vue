<template>
  <div>
    <!-- <Student name="张三" :age='18' sex="男" /> -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <Student @atguigu="getStudentName" @demo="m1"   />
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
		<Student ref="student"  name="任万松" :age='20' sex="男" @click.native="show"/>
  </div>
</template>

<script>

import Student from './components/Student.vue'
import School from './components/School.vue'

    export default {
        name:'App',
        components:{ Student, School },
        data(){
            return{
                
            }
        },
        methods:{
            getStudentName (name,...params){
              console.log('App的子组件使用了aiguigu方法显示学校姓名等信息',name,params)
            },
            m1(){
              console.log('m1')
            },
            show(){
            console.log('show Time！！！')
        },
        },
        mounted(){
          this.$refs.student.$on('atguigu',this.getStudentName )

          // this.$refs.student.$on('atguigu',(name,...params)=>{
          //   console.log('App的子组件使用了aiguigu方法显示学校姓名等信息',name,params)
          // } )

          // setTimeout(()=>{
          //   this.$refs.student.$on('atguigu',this.getStudentName )
          // },3000)
        }
    }
</script>
