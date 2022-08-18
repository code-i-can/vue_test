<template>
  <div>
    <Student name="张三" :age='18' sex="男"/>
    <!-- <Student name="任万松" sex='男'/> -->
    <School/>
  </div>
</template>

<script>

    import Student from './components/Student'
    import School from './components/School'

    export default {
        name:'App',
        components:{ Student, School },
        
    }
</script>
