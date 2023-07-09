<template>
	<div class="text-center w-fit m-5">
		<img :src="getImageUrl()" class="w-20" alt="" />
		<p>{{ text }}</p>
	</div>
</template>

<script>
export default {
	name: "File",
	props: {
		text: String,
		imgsrc: String,
	},
	methods: {
		getImageUrl() {
			return new URL(`../assets/icons/${this.imgsrc}`, import.meta.url);
		},
	},
};
</script>

<style></style>
