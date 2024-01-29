export const useHomeStore = defineStore('home', () => {
  // 激活的加工任务
  const activeProcessTask = useStorage('active_process_task', 0)

  return {
    activeProcessTask
  }
})
