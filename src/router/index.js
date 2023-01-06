import { createWebHistory, createRouter } from 'vue-router';
// import Home from '@/views/Home.vue';
// import Body from '@/components/Body.vue';

const routes = [
	// {
	// 	path: '/',
	// 	name: 'Home',
	// 	component: Home,
	// },
    // {
	// 	path: '/body',
	// 	name: 'Body',
	// 	component: Body,
	// },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;