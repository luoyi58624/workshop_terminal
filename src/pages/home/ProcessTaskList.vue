<script setup lang="tsx">
const progressTaskScrollRef = ref<HTMLElement>()

// 激活的加工任务
const activeProcessTask = ref(0)

// 加工任务列表
const processTaskList = ref<Array<{ id: number; name: string; state: number; image: string }>>([])


useWheelScroll(progressTaskScrollRef, {
  activeIndex: activeProcessTask
})

function setActiveProcessTask(value: number) {
	activeProcessTask.value = value
}

const ProcessTaskState = (props: { state: number }) => {
	switch (props.state) {
		case 0:
			return <div className="text-sm text-center bg-green text-primary">加工中</div>
		case 1:
			return <div className="text-sm text-center bg-primary text-black">待加工</div>
		case 2:
			return <div className="text-sm text-center bg-red text-primary">维修中</div>
		default:
			return <div className="text-sm text-center bg-gray text-white">未知类型</div>
	}
}

onBeforeMount(()=>{
  processTaskList.value = Array.from(Array(30).keys()).map(i => {
    return {
      id: i,
      name: `CNC${i + 1}`,
      state: Math.floor(Math.random() * 3),
      image: ''
    }
  })
})
</script>

<template>
	<div
		ref="progressTaskScrollRef"
		class="h-120px mt-2 p-2 shrink-0 flex rounded overflow-x-scroll overflow-y-hidden scrollbar-hide bg-info/80 [&>div]:(h-full px-1 pt-1 select-none rounded flex flex-col aspect-[5/4] cursor-pointer bg-info) [&>div:not(:first-child)]:ml-2">
		<div
			v-for="item in processTaskList"
			:key="item.id"
			:class="[activeProcessTask === item.id && 'bg-secondPrimary!']"
			@click="setActiveProcessTask(item.id)">
			<ProcessTaskState :state="item.state" />
			<img src="/login_bg.jpg" alt="加工图" class="grow" />
			<div class="text-sm text-center text-primary">{{ item.name }}</div>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
