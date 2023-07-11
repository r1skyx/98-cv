import { createRouter, createWebHistory } from "vue-router";
import WebDevView from "./views/WebDevView.vue";
import MusicView from "./views/MusicView.vue";
import BlogView from "./views/BlogView.vue";
import ProjectsView from "./views/ProjectsView.vue";

import DesktopView from "./views/DesktopView.vue";

const routes = [
	{
		path: "/",
		name: "Desktop",
		component: DesktopView,
	},
	{
		path: "/web-dev",
		name: "Web Dev",
		component: WebDevView,
	},
	{
		path: "/blog",
		name: "Blog",
		component: BlogView,
	},
	{
		path: "/music",
		name: "Music",
		component: MusicView,
	},
	{
		path: "/web-dev/projects",
		name: "Web Dev Projects",
		component: ProjectsView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
