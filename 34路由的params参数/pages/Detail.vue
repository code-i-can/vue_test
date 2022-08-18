<template>
  <div>
    <ul>
        <li>
            id：{{$route.params.id}}
        </li>
        <li>
            title：{{$route.params.title}}
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