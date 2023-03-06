import { createRouter, createWebHistory } from 'vue-router'
import regularRoutes from './modules'

const errorRouter = {
	path: '/:catchAll(.*)',
	name: 'NotFound',
	component: () => import('@/views/errors/NotFound.vue'),
	meta: {
		title: 'Not Found',
	},
}

const router = createRouter({
	history: createWebHistory(),
	routes: [
		...regularRoutes,
		errorRouter, // 永远放在最后
	],
	scrollBehavior(to, from, savedPosition) {
		return {
			top: 0,
			behavior: 'smooth',
		}
	},
})

export default router