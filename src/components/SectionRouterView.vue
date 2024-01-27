<script setup lang="ts"></script>

<template>
	<router-view v-slot="{ Component }">
		<transition name="route-fade" mode="out-in">
			<keep-alive>
				<component :is="Component" />
			</keep-alive>
		</transition>
	</router-view>
</template>

<style scoped lang="scss">
/* 路由切换动画 */
.route-fade-leave-active,
.route-fade-enter-active {
	transition: all 0.3s;
}

.route-fade-enter-from {
	transform: translateX(-30px);
	opacity: 0;
}

.route-fade-leave-to {
	transform: translateX(30px);
	opacity: 0;
	//position: absolute;
}
</style>
