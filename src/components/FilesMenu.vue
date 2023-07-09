<template>
	<File imgsrc="Explorer98.ico" text="Web Dev"></File>
	<File imgsrc="Music98.ico" text="Blog"></File>
	<File imgsrc="Writing98.ico" text="Music"></File>
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
