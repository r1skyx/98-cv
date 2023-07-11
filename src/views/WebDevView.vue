<template>
	<div>
		<div class="window w-screen h-screen flex flex-col justify-between">
			<title-bar text="Web Dev"></title-bar>
			<div class="window-body">
				<div class="grid grid-cols-2">
					<div class="m-auto">
						<img src="../assets/me.svg" class="m-auto" alt="" srcset="" />
					</div>
					<div class="w-2/3">
						<h2>Rizah Shashivari</h2>
						<h4 class="text-gray-600">Web Developer</h4>
						<h4 class="">
							A front and back-end developer with a passion for building awesome
							websites and apps. Currently doing an apprenticeship at Exali AG
							in Germany.
						</h4>
						<div class="mt-5">
							<h4>Skills:</h4>
							<ul class="ml-5">
								<li>CSS - Bootstrap, Tailwind</li>
								<li>JavaScript - Vue, React, Node.js</li>
								<li>PHP - Phalcon, Laravel</li>
								<li>Docker</li>
							</ul>
							<h4>Languages:</h4>
							<ul class="ml-5">
								<li>Albanian</li>
								<li>English</li>
								<li>German</li>
							</ul>
						</div>
						<div class="flex justify-end w-5/6 mt-24">
							<router-link to="/web-dev/projects"
								><button class="text-sm p-2">
									Continue to projects
								</button></router-link
							>
						</div>
					</div>
				</div>
			</div>
			<div class="status-bar w-full">
				<div class="flex flex-row justify-around w-full">
					<p class="status-bar-field">Press F1 for help</p>
					<p class="status-bar-field">Slide 1</p>
					<p class="status-bar-field">CPU Usage: 14%</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TitleBar from "../components/TitleBar.vue";
export default {
	name: "WebDevView",
	components: { TitleBar },
	data() {
		return {};
	},
};
</script>

<style scoped>
ul {
	font-size: 1rem;
	list-style: circle;
}
</style>
