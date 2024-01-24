<script setup lang="ts">
const router = useRouter()
const userStore = useUserStore()

// 激活的工件按钮
const activeWorkpieceButton = ref(0)

// 激活的加工按钮
const activeProcessButton = ref(0)

// 加工按钮
const processButtons = ref<Array<{ id: number; name: string }>>([])

// 加工任务列表
const processTaskList = ref<Array<{ id: number; name: string; image: string }>>([])

function setActiveWorkpieceButton(value: number) {
	activeWorkpieceButton.value = value
}

function setActiveProcessButton(value: number) {
	activeProcessButton.value = value
}

function logout() {
	userStore.userInfo = {}
	router.replace('/login')
}

onBeforeMount(() => {
	processButtons.value = [
		{
			id: 0,
			name: '开始加工'
		},
		{
			id: 1,
			name: '部分完成'
		},
		{
			id: 2,
			name: '全部完成'
		},
		{
			id: 3,
			name: '取消加工'
		}
	]

	processTaskList.value = Array.from(Array(20).keys()).map(i => {
		return {
			id: i,
			name: `CNC${i}`,
			image: ''
		}
	})
})
</script>

<template>
	<div class="h-full p-2 flex flex-col bg-gradient-to-b from-[#a3d4fd] to-[#4573c1]">
		<div class="flex items-center justify-between">
			<div class="inline-flex rounded-md shadow-sm" role="group">
				<button
					type="button"
					class="button-group-item border rounded-s-lg"
					:class="[activeWorkpieceButton == 0 && 'actived']"
					@click="setActiveWorkpieceButton(0)">
					工件确认
				</button>
				<button
					type="button"
					class="button-group-item border-t border-b"
					:class="[activeWorkpieceButton == 1 && 'actived']"
					@click="setActiveWorkpieceButton(1)">
					工件接受
				</button>
				<button
					type="button"
					class="button-group-item border rounded-e-lg"
					:class="[activeWorkpieceButton == 2 && 'actived']"
					@click="setActiveWorkpieceButton(2)">
					工件转出
				</button>
			</div>
			<button class="ring-btn-info px-6 text-primary" @click="logout">注 销</button>
		</div>

		<div class="h-24 mt-2">
			<el-scrollbar class="h-24 mt-2">
				<div class="h-full p-2 flex rounded bg-info/80 [&>div:not(:first-child)]:ml-2">
					<div v-for="item in processTaskList" :key="item.id" class="h-full aspect-square bg-info">
						{{ item.name }}
					</div>
				</div>
			</el-scrollbar>
		</div>

		<div class="mt-4 grow flex">
			<div class="h-full w-80 rounded bg-info/80"></div>
			<div class="h-full px-4 flex flex-col justify-center">
				<button
					v-for="button in processButtons"
					:key="button.id"
					class="mt-4 border-2 border-white"
					:class="[activeProcessButton === button.id ? 'base-btn-secondPrimary text-primary' : 'base-btn-info']"
					@click="setActiveProcessButton(button.id)">
					{{ button.name }}
				</button>
			</div>
			<div class="grow rounded bg-info/80"></div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.button-group-item {
	@apply px-4 py-2 text-sm font-medium text-white bg-info/80  border-gray-200 hover:text-primary;

	&.actived {
		@apply bg-secondPrimary text-primary;
	}
}
</style>
