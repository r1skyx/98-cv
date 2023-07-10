<script>
import ModalStart from "../components/ModalStart.vue";
import FilesMenu from "../components/FilesMenu.vue";

export default {
	name: "DesktopView",
	components: { ModalStart, FilesMenu },
};
</script>

<template>
	<files-menu></files-menu>
	<modal-start></modal-start>
</template>

<style scoped></style>
