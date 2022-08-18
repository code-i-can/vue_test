<template>
  <h3>我是About的内容</h3>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    console.log('About--beforeRouteEnter',to,from)
    if(to.meta.isAuth){ //判断是否需要鉴权
		if(localStorage.getItem('school')==='ncwu'){
			next()
		}else{
			alert('学校名不对，无权限查看！')
		}
	}else{
		next()
	}
  },
    beforeRouteLeave (to, from, next) {
    // ...
    console.log('About--beforeRouteLeave',to,from)
    next()
  },
}
</script>

<style>

</style>