<script setup lang="ts">
// 激活的加工按钮
const activeProcessButton = ref(0)

// 加工按钮
const processButtons = ref<Array<{ id: number; name: string }>>([])

function setActiveProcessButton(value: number) {
	activeProcessButton.value = value
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
})
</script>

<template>
	<div class="px-4 shrink-0 flex xs:(flex-row justify-around items-center) lg:(h-full flex-col justify-center)">
		<button
			v-for="item in processButtons"
			:key="item.id"
			class="xs:(px-2 py-1 text-xs) sm:(px-4 py-2 text-sm) border-2 border-white text-primary xs:my-2 lg:mt-4"
			:class="[activeProcessButton === item.id ? 'base-btn-secondPrimary' : 'base-btn-info']"
			@click="setActiveProcessButton(item.id)">
			{{ item.name }}
		</button>
	</div>
</template>

<style scoped lang="scss"></style>
