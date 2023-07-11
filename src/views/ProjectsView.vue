<template>
	<div>
		<div class="window w-screen h-screen flex flex-col">
			<title-bar text="Web Dev"></title-bar>
			<div class="px-2 pt-1 flex">
				<div class="status-bar w-28 text-end m-auto p-1">
					<div class="status-bar-field h-fit">
						<p>Address</p>
					</div>
				</div>
				<div class="bg-white w-full m-auto p-1">
					<h5>Rizah/web-dev/projects</h5>
				</div>
			</div>
			<div class="window-body bg-white h-full">
				<div class="flex w-fit">
					<File routeTo="/" text="Project" imgsrc="Explorer98.ico"></File>
					<File routeTo="/" text="Project" imgsrc="Explorer98.ico"></File>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import File from "../components/File.vue";
import TitleBar from "../components/TitleBar.vue";

export default {
	name: "ProjectView",
	components: { TitleBar, File },
};
</script>

<style scoped></style>
