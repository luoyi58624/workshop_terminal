<script setup lang="ts">
import { breakpointOption } from '@/stores/breakpoint.ts'

const breakpointStore = useBreakpointStore()
// 加工零件信息表格数据
const progressTableList = ref([])
const tableRef = ref()

useElScrollbarPosition(tableRef)

const indeterminate = computed(() => {
	const length = progressTableList.value.filter(e => e['selected']).length
	return 0 < length && length < progressTableList.value.length
})

onBeforeMount(() => {
	progressTableList.value = generateList(20).map(i => {
		return {
			selected: false,
			id: i,
			code: `M${i}`,
			code1: 'M230102-A001',
			code2: 'P00000000012',
			code3: `10`,
			code4: '00000000',
			code5: '20',
			start_time: '2023-12-01 13:00',
			end_time: '2023-12-01 13:00',
			time: '10'
		}
	})
})
</script>

<template>
	<div class="flex grow rounded flex-col bg-info/80 xs:(w-full h-full) lg:(w-0 h-full)">
		<div class="h-10 shrink-0 flex justify-between items-center px-2">
			<h5 class="text-red-5">待加工零件信息</h5>
			<div class="flex items-center">
				<input class="px-1 md:py-2px mr-2 rounded" placeholder="请输入查询条件" />
				<Search />
			</div>
		</div>

		<div class="grow w-full h-0">
			<el-table ref="tableRef" class="process-table" width="100%" height="100%" :data="progressTableList">
				<el-table-column type="selection" width="55" fixed align="center" />
				<el-table-column property="code" label="项目号" min-width="120" align="center"></el-table-column>
				<el-table-column property="code1" label="物料编号" min-width="140" align="center" />
				<el-table-column property="code2" label="生产订单" min-width="140" align="center" />
				<el-table-column property="code3" label="工序号" width="70" align="center" />
				<el-table-column property="code4" label="确认号" width="120" align="center" />
				<el-table-column property="code5" label="数量" width="60" align="center" />
				<el-table-column property="start_time" label="计划开始" min-width="160" align="center" />
				<el-table-column property="end_time" label="计划结束" min-width="160" align="center" />
				<el-table-column property="time" label="工时" width="60" align="center" />
				<el-table-column label="图纸" width="60" align="center" fixed="right">
					<template #default="scope">
						<div class="w-full h-full flex-center">
							<Search />
						</div>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="h-10 shrink-0 flex justify-between items-center px-2">
			<div class="flex items-center">
				<input class="px-1 md:py-2px mr-2 rounded" placeholder="请输入确认号或指令" v-focus />
				<div class="i-mdi:search text-primary"></div>
			</div>
			<el-pagination
				class="process-pagination"
				layout="pager"
				:total="50"
				background
				:small="breakpointStore.width < breakpointOption.md" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.process-table {
	--bg-color: rgba(0, 0, 0, 0);
	--el-table-bg-color: var(--bg-color);
	--el-table-border-color: var(--el-table-bg-color);
	--el-table-border: none;
	--el-table-text-color: white;
	--el-table-header-text-color: white;
	--el-table-row-hover-bg-color: transparent;
	--el-table-current-row-bg-color: var(--bg-color);
	--el-table-header-bg-color: var(--bg-color);
	--el-table-fixed-box-shadow: var(--bg-color);
	--el-table-tr-bg-color: var(--bg-color);
	--el-table-expanded-cell-bg-color: var(--bg-color);
	--el-table-fixed-left-column: inset 10px 0 10px -10px rgba(0, 0, 0, 0.15);
	--el-table-fixed-right-column: inset -10px 0 10px -10px rgba(0, 0, 0, 0.15);
	--el-table-index: var(--el-index-normal);

	&.is-scrolling-middle {
		&:deep(.el-table-fixed-column--left) {
			@apply bg-info;
		}
	}

	&.is-scrolling-right {
		&:deep(.el-table-fixed-column--left) {
			@apply bg-info;
		}
	}

	&:not(.is-scrolling-none):deep(.el-table-fixed-column--right) {
		@apply bg-info;
	}

	&:not(.is-scrolling-none):deep(.hover-row) {
		.el-table-fixed-column--right {
			@apply bg-info;
		}
	}
}
</style>
