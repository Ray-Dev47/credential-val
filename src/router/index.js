import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Jobs from '@/views/jobs/Jobs.vue';
import JobDetails from '@/views/jobs/JobDetails.vue';
import NotFound from '@/views/NotFound.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
    {
		path: '/about',
		name: 'About',
		component: About,
	},
    {
		path: '/Jobs',
		name: 'Jobs',
		component: Jobs,
	},
    {
		path: '/Jobs/:id',
		name: 'JobDetails',
		component: JobDetails,
		props: true
	}, 

	// reidrects - supposing we have an old link that has been replaced with a new link e.g /allJobs to /Jobs
	{
		path: '/allJobs',
		redirect: '/Jobs'
	},
	// 404 not found page
	{
		path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;