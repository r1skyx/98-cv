<script>
import ModalStart from "./components/ModalStart.vue";
import FilesMenu from "./components/FilesMenu.vue";

export default {
	name: "App",
	components: { ModalStart, FilesMenu },
};
</script>

<template>
	<router-view></router-view>
</template>

<style scoped></style>
