<template>
	<div class="title-bar">
		<div class="title-bar-text">{{ text }}</div>
		<div class="title-bar-controls">
			<button aria-label="Minimize"></button>
			<button aria-label="Maximize"></button>
			<button aria-label="Close" @click="this.$router.go(-1)"></button>
		</div>
	</div>
</template>

<script>
export default {
	name: "TitleBar",
	props: {
		text: String,
	},
};
</script>

<style>
@import url("https://unpkg.com/98.css");
</style>
