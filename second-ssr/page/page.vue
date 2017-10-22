<template>
    <div class="main">
        {{msg}}
    </div>
</template>

<script>
	export default{
		name: "app",
		data () {
			return {
				msg:'hello Vue 哈哈哈哈好'
            };
		}
	}
</script>
<style lang="" scoped>
    .main{
        color:red;
        font-size:14px;
    }
</style>