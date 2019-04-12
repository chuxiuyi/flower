<template>
	<div class="hello">
		<div class="title">
			<div v-show="$store.state.show=true">搜索</div>
			<div v-show="$store.state.show=false">
				<a href="javascript:history.back()">返回</a>
			</div>
			<div></div>
			<div v-show="$store.state.show=true">客服</div>
			<div v-show="$store.state.show=false"> </div>
		</div>
		<div class="body">
			123
		</div>
	</div>

</template>

<script>
	export default {
		name: "HelloWorld",
		data() {
			return {
				

			};
		},
		created() {
			// this.$store.commit("setBook", "阅读")
			// this.$store.commit("setShow", "list")

		},
		methods: {
		
			
		},
	

	};
</script>
<style scoped>
	* {
		padding: 0;
		margin: 0;
	}

	.title {
		position: fixed;
		display: flex;
		width: 100%;
		height: 0.8rem;
		line-height: 0.8rem;
		background-color: #f8f8f8;
		justify-content: center;
	}

	.title div {
		flex-grow: 1;
		text-align: center;
		line-height: 0.8rem;
		font-size: 0.25rem;
	}

	.body {
		position: fixed;
		top: 0.8rem;
		width: 100%;
		height: calc(100% - 1.75rem);
		overflow-y: scroll;
		box-sizing: border-box;
		padding: 0px 0.15rem;
	}

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
