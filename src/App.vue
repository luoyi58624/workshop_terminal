<script setup lang="ts">
const breakpointStore = useBreakpointStore()
breakpointStore.initBreakpoint()
</script>

<template>
	<el-config-provider>
		<router-view />
	</el-config-provider>
</template>

<style scoped></style>
