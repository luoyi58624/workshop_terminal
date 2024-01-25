<script setup lang="tsx">
const router = useRouter()
const userStore = useUserStore()

// 激活的工件按钮
const activeWorkpieceButton = ref(0)

// 工件按钮
const workpieceButtons = ref<Array<{ id: number; name: string }>>([])

const progressTaskScrollRef = ref<HTMLElement>()

// 激活的加工任务
const activeProcessTask = ref(0)

// 加工任务列表
const processTaskList = ref<Array<{ id: number; name: string; state: number; image: string }>>([])

// 激活的加工按钮
const activeProcessButton = ref(0)

// 加工按钮
const processButtons = ref<Array<{ id: number; name: string }>>([])

const finishInfoList = ref<Array<any>>([])

useWheelScroll(progressTaskScrollRef, {
	activeIndex: activeProcessTask
})

function setActiveWorkpieceButton(value: number) {
	activeWorkpieceButton.value = value
}

function setActiveProcessTask(value: number) {
	activeProcessTask.value = value
}

function setActiveProcessButton(value: number) {
	activeProcessButton.value = value
}

function logout() {
	userStore.userInfo = {}
	router.replace('/login')
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

onBeforeMount(() => {
	workpieceButtons.value = [
		{
			id: 0,
			name: '工件确认'
		},
		{
			id: 1,
			name: '工件接受'
		},
		{
			id: 2,
			name: '工件转出'
		}
	]
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

	processTaskList.value = Array.from(Array(30).keys()).map(i => {
		return {
			id: i,
			name: `CNC${i + 1}`,
			state: Math.floor(Math.random() * 3),
			image: ''
		}
	})

	finishInfoList.value = [
		{
			time: '今日',
			finishCount: 2,
			planTime: 4
		},
		{
			time: '昨日',
			finishCount: 2,
			planTime: 4
		},
		{
			time: '本周',
			finishCount: 2,
			planTime: 4
		},
		{
			time: '本月',
			finishCount: 2,
			planTime: 4
		}
	]
})
</script>

<template>
	<div class="h-full p-2 overflow-hidden bg-gradient-to-b from-[#a3d4fd] to-[#4573c1] lg:(flex flex-col)">
		<div class="flex items-center justify-between">
			<div class="button-group" role="group">
				<button
					v-for="item in workpieceButtons"
					:key="item.id"
					:class="[activeWorkpieceButton === item.id && 'actived']"
					@click="setActiveWorkpieceButton(item.id)">
					{{ item.name }}
				</button>
			</div>
			<button class="ring-btn-info px-6 text-primary" @click="logout">注 销</button>
		</div>

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

		<div class="mt-2 grow flex overflow-y-auto">
			<div class="h-full w-80 rounded bg-info/80">
				<el-scrollbar>
					<div class="p-2">
						<div class="flex h-36 rounded overflow-hidden bg-info">
							<div class="grow pl-4 py-8 text-sky">
								<p>姓名：{{ '吴佳乐' }}</p>
								<p class="my-2">工作中心：{{ 'CNC' }}</p>
								<p>机台编号：{{ 'CNC10' }}</p>
							</div>
							<img src="/login_bg.jpg" alt="头像" class="h-full aspect-[3/4]" />
						</div>
						<div class="my-8">
							<div class="flex justify-between items-end">
								<h5 class="text-red-5">加工中信息</h5>
								<a class="text-sm cursor-pointer text-white">查看更多></a>
							</div>
							<p class="text-primary mt-1">生产订单：{{ 'PO23140122003' }}</p>
							<p class="text-primary mt-1">物料编码：{{ 'BC-210229-A002' }}</p>
							<div class="flex">
								<span class="text-primary mt-1">计划工时：{{ '4H' }}</span>
								<span class="text-primary mt-1 ml-8">数量：{{ '2' }}</span>
							</div>
							<p class="text-primary mt-1">计划开始：{{ '2024-01-22 10:30' }}</p>
							<p class="text-primary mt-1">计划结束：{{ '2024-02-06 16:00' }}</p>
							<p class="text-primary mt-1">附件图纸：</p>
						</div>
						<div class="w-full grow">
							<h5 class="text-red-5 mt-1">完工信息小计</h5>
							<table class="w-full mt-2">
								<tr class="bg-info w-full">
									<th class="text-primary py-2">时段</th>
									<th class="text-primary">完成数量</th>
									<th class="text-primary">计划工时</th>
								</tr>
								<tr v-for="item in finishInfoList" class="text-center">
									<td class="text-primary py-1">{{ item['time'] }}</td>
									<td class="text-primary">{{ item['finishCount'] }}</td>
									<td class="text-primary">{{ item['planTime'] }}</td>
								</tr>
							</table>
						</div>
					</div>
				</el-scrollbar>
			</div>

			<div class="h-full px-4 flex flex-col justify-center">
				<button
					v-for="item in processButtons"
					:key="item.id"
					class="mt-4 border-2 border-white text-primary"
					:class="[activeProcessButton === item.id ? 'base-btn-secondPrimary' : 'base-btn-info']"
					@click="setActiveProcessButton(item.id)">
					{{ item.name }}
				</button>
			</div>
			<div class="grow rounded bg-info/80"></div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.button-group {
	@apply inline-flex rounded-md shadow-sm;

	& > button {
		@apply px-4 py-2 text-sm select-none font-medium text-white bg-info/80  border-gray-200 hover:text-primary;

		&.actived {
			@apply bg-secondPrimary text-primary;
		}
	}

	& > button:first-child {
		@apply border rounded-s-lg;
	}

	& > button:nth-child(n + 2):not(:nth-last-child(-n + 1)) {
		@apply border-t border-b;
	}

	& > button:nth-child(n + 3):not(:nth-last-child(-n + 1)) {
		@apply border-l;
	}

	& > button:last-child {
		@apply border rounded-e-lg;
	}
}
</style>
