<script setup lang="ts">
import {useHomeStore} from "@/pages/home/store.ts";

interface ButtonAttr {
	name: string
	path: string
}

const router = useRouter()
const userStore = useUserStore()
const homeStore = useHomeStore()

// 工件按钮
const workpieceButtons = ref<Array<ButtonAttr>>([])

function logout() {
	userStore.userInfo = {}
  homeStore.activeProcessTask = 0
	router.replace('/login')
}

onBeforeMount(() => {
	workpieceButtons.value = [
		{
			name: '工件确认',
			path: '/workpiece_confirm'
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
			<router-link v-for="item in workpieceButtons" :to="item.path" class="button-group-item">
				{{ item.name }}
			</router-link>
		</div>
		<button class="ring-btn-info text-primary xs:(px-2 py-1 text-xs) sm:(px-4 py-2 text-sm)" @click="logout">
			注 销
		</button>
	</div>
</template>

<style scoped lang="scss">
.button-group {
	@apply inline-flex rounded-md shadow-sm;

	& > .button-group-item {
		@apply xs:(px-2 py-1 text-xs) sm:(px-4 py-2 text-sm) cursor-pointer select-none font-medium text-white bg-info/80  border-gray-200 hover:text-primary;

		&.actived {
			@apply bg-secondPrimary text-primary;
		}
	}

	& > .button-group-item:first-child {
		@apply border rounded-s-lg;
	}

	& > .button-group-item:nth-child(n + 2):not(:nth-last-child(-n + 1)) {
		@apply border-t border-b;
	}

	& > .button-group-item:nth-child(n + 3):not(:nth-last-child(-n + 1)) {
		@apply border-l;
	}

	& > .button-group-item:last-child {
		@apply border rounded-e-lg;
	}
}
</style>
