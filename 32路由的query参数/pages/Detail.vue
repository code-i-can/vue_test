<template>
  <div>
    <ul>
        <li>
            id：{{$route.query.id}}
        </li>
        <li>
            title：{{$route.query.title}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
           
        }
    },
    mounted() {
			console.log(this.$route)
	},
}
</script>

<style>

</style>