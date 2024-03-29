import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
	history: createWebHashHistory(),
	linkActiveClass: 'actived',
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
			meta: {
				title: '登陆车间系统'
			},
			component: () => import('@/pages/login.vue')
		},
		{
			path: '/',
			redirect: '/workpiece_confirm',
			name: 'Home',
			meta: {
				auth: true
			},
			component: () => import('@/pages/home/index.vue'),
			children: [
				{
					path: 'workpiece_confirm',
					name: 'WorkpieceConfirm',
					component: () => import('@/pages/home/workpiece_confirm/index.vue')
				},
				{
					path: 'workpiece_accept',
					name: 'WorkpieceAccept',
					component: () => import('@/pages/home/workpiece_accept/index.vue')
				},
				{
					path: 'workpiece_forward',
					name: 'WorkpieceForward',
					component: () => import('@/pages/home/workpiece_forward/index.vue')
				}
			]
		},
		{
			path: '/test',
			name: 'Test',
			component: () => import('@/pages/test.vue')
		}
	]
})

router.beforeEach(to => {
	if (to.meta.title != null) {
		window.document.title = to.meta.title
	} else {
		window.document.title = import.meta.env.VITE_TITLE
	}
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
