<script setup lang="ts">
import loginBg from '@/assets/login_bg.jpg'

const router = useRouter()
const userStore = useUserStore()
const username = ref('')
const title = import.meta.env.VITE_TITLE

function login() {
	if (username.value === '') {
		showMessage('请输入用户名', 'warning')
		return
	}
	userStore.userInfo['id'] = '1'
	router.replace('/')
}
</script>

<template>
	<div class="w-full h-full flex flex-col">
		<header class="w-full h-16 relative flex-center">
			<div class="absolute left-8 h-full flex items-center">
				<img src="/logo.png" alt="" class="w-24 h-12 mr-2 xs:hidden sm:block" />
				<p class="xs:hidden lg:block">深圳市伟博思技术有限公司</p>
			</div>
			<div class="flex items-end">
				<h3>{{ title }}</h3>
				<p class="text-lg">(v1.0)</p>
			</div>
		</header>
		<main class="grow px-4 bg-no-repeat bg-cover bg-center flex-center" :style="{ backgroundImage: `url(${loginBg})` }">
			<div class="w-80 p-8 relative rounded-lg border-3 backdrop-blur-sm flex flex-col items-center bg-dark/16">
				<h3 class="text-primary select-none">身份验证</h3>
				<input class="w-full mt-6 text-center text-white input-primary" type="text" autofocus v-model="username" />
				<button class="w-full mt-6 ring-btn-yellow-5" :disabled="username == ''" @click="login">登陆</button>
			</div>
		</main>
	</div>
</template>

<style scoped lang="scss"></style>
