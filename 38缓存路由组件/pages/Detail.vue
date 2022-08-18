<template>
  <div>
    <ul>
        <li>
            id：{{id}}
        </li>
        <!-- <li>
            props:{{a}}
        </li> -->
        <li>
            title：{{title}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props:['id','title']
}
</script>

<style>

</style>