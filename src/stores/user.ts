export const useUserStore = defineStore('user', () => {
	const userInfo = useStorage('user_info', {})
	const isLogin = computed(() => userInfo.value['id'] != null)

	return {
		userInfo,
		isLogin
	}
})
