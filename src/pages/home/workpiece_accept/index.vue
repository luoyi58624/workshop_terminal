<script setup lang="ts">
const count = ref(0)
</script>

<template>
	<div class="grow flex-center">
		<button class="ring-btn-success" @click="count++">count:{{ count }}</button>
	</div>
</template>

<style scoped lang="scss"></style>
