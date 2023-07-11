<template>
	<router-link :to="routeTo" style="text-decoration: none; color: inherit">
		<div class="text-center w-fit m-1 p-2">
			<img :src="getImageUrl()" class="w-20 m-2" alt="" />
			<p>{{ text }}</p>
		</div>
	</router-link>
</template>

<script>
export default {
	name: "File",
	props: {
		text: String,
		imgsrc: String,
		routeTo: {
			type: String,
			required: false,
		},
	},
	methods: {
		getImageUrl() {
			return new URL(`../assets/icons/${this.imgsrc}`, import.meta.url);
		},
	},
};
</script>

<style scoped></style>
