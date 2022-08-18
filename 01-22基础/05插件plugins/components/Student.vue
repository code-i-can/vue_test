<template>
  <div >
    <h3 >姓名：{{name}}</h3>
    <h3>年龄：{{myAge}}</h3>
    <h3>性别：{{sex}}</h3>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
import { hunhe } from '../mixin'

export default {
    name:'Student',
    data(){
        return{
            msg:'NCWU',
            myAge:this.age,
        }
    },
    mixins:[hunhe],
    props:{
        name:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            default:24,
        },
        sex:{
            type:String,
            required:true,
        },
        
    },
}
</script>
