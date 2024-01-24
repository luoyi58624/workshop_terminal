export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {} as any
  }),
  getters: {
    isLogin: state => state.userInfo['id'] != null
  },
  actions: {}
});
