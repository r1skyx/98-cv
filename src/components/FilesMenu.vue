<template>
	<div class="flex flex-col w-fit">
		<File routeTo="/web-dev" imgsrc="Explorer98.ico" text="Web Dev"></File>
		<File routeTo="/blog" imgsrc="Writing98.ico" text="Blog"></File>
		<File routeTo="/music" imgsrc="Music98.ico" text="Music"></File>
	</div>
</template>

<script>
import File from "./File.vue";
export default {
	name: "FilesMenu",
	components: { File },
	data() {
		return {
			source: "Windows98Scaled Icon 11.ico",
		};
	},
};
</script>

<style></style>
