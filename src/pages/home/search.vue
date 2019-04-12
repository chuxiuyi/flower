<template>
	<div class="hello">

		<input type="text"/>
	</div>

</template>

<script>
	export default {
		name: "HelloWorld",
		data() {
			return {
				mainList: []
			};
		},
		created() {
			// this.$store.commit("setBook", "阅读")
			// this.$store.commit("setShow", "list")

		}
	};
</script>
<style scoped >

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
