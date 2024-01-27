<script setup lang="ts">
import Header from './Header.vue'
import ProcessTaskList from './ProcessTaskList.vue'
import InfoPanel from './InfoPanel.vue'
import ProcessButtons from './ProcessButtons.vue'
import ProcessTable from './ProcessTable.vue'
</script>

<template>
	<div class="w-screen h-screen p-2 flex flex-col overflow-hidden bg-gradient-to-b from-[#a3d4fd] to-[#4573c1]">
		<Header />
		<ProcessTaskList />
		<div class="h-0 mt-2 grow flex xs:flex-col lg:flex-row">
			<InfoPanel />
			<ProcessButtons />
			<ProcessTable />
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
