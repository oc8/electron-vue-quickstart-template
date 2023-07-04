import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/HomeView.vue"
import ReaderView from "../views/ReaderView.vue"


const routes: Array<RouteRecordRaw> = [
	{
		name: 'home',
		path: '/',
		component: Home
	},
	{
		name: 'Reader',
		path: '/reader',
		component: ReaderView
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router;
