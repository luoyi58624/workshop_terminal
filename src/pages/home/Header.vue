<script setup lang="ts">
interface ButtonAttr {
	name: string
	path: string
}

const router = useRouter()
const userStore = useUserStore()

// 工件按钮
const workpieceButtons = ref<Array<ButtonAttr>>([])

function setActiveWorkpieceButton(data: ButtonAttr) {
	activeWorkpieceButton.value = data.id
	router.push(data.path)
}

function logout() {
	userStore.userInfo = {}
	router.replace('/login')
}

onBeforeMount(() => {
	workpieceButtons.value = [
		{
			name: '工件确认',
			path: '/'
		},
		{
			name: '工件接受',
			path: '/workpiece_accept'
		},
		{
			name: '工件转出',
			path: '/workpiece_forward'
		}
	]
})
</script>

<template>
	<div class="flex items-center justify-between">
		<div class="button-group" role="group">
			<button
				v-for="item in workpieceButtons"
				:key="item.id"
				:class="[activeWorkpieceButton === item.id && 'actived']"
				@click="setActiveWorkpieceButton(item)">
				{{ item.name }}
			</button>
		</div>
		<button class="ring-btn-info text-primary xs:(px-2 py-1 text-xs) sm:(px-4 py-2 text-sm)" @click="logout">
			注 销
		</button>
	</div>
</template>

<style scoped lang="scss">
.button-group {
	@apply inline-flex rounded-md shadow-sm;

	& > button {
		@apply xs:(px-2 py-1 text-xs) sm:(px-4 py-2 text-sm) select-none font-medium text-white bg-info/80  border-gray-200 hover:text-primary;

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
