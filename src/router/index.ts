import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/:pathMatch(.*)*',
			component: () => import('@/pages/common/transfer_router.vue')
		},
		{
			path: '/404',
			name: 'NotFound',

			component: () => import('@/pages/common/not_found.vue')
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('@/pages/login.vue')
		},
		{
			path: '/',
			name: 'Home',
			meta: {
				auth: true
			},
			component: () => import('@/pages/home.vue')
		},
		{
			path: '/test',
			name: 'Test',
			component: () => import('@/pages/test.vue')
		}
	]
})

router.beforeEach(to => {
	if (to.meta.auth == null || !to.meta.auth) return true
	const userStore = useUserStore()
	if (userStore.isLogin) return true
	else
		return {
			name: 'Login',
			query: { redirect: to.fullPath }
		}
})

router.afterEach(() => {})

export default router
