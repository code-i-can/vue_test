<template>
  <div >
    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>

    import {hunhe} from '../mixin'

    export default {
        name:'School',
        data(){
            return {
                name:'华北水利水电大学',
                address:'金水东路136号',
            }
        },
        mixins:[hunhe]
    }   
</script>
