<template>
  <div>
    <Student name="张三" :age='18' sex="男"/>
    <Student name="任万松" sex='男'/>
  </div>
</template>

<script>

    import Student from './components/Student.vue'

    export default {
        name:'App',
        components:{ Student },
        data(){
            return{
                
            }
        },
        methods:{
            
        }
    }
</script>
