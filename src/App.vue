<template>
	<div id="app">
		<router-view />
		<tabbar></tabbar>
	</div>
</template>

<script>
	import tabbar from '@/components/Tabbar'
	export default {
		name: 'App',
		created() {

		},
		components: {

			tabbar,
		},
	}
</script>

<style>
	* {
		padding: 0px;
		margin: 0px;
	}

	a {
		text-decoration: none;
	}



	.hello::-webkit-scrollbar {
		display: none;
	}
</style>
