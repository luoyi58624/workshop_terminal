<script setup lang="ts"></script>

<template>
	<div class="w-screen h-screen overflow-hidden flex flex-col">
		<header class="h-16 shrink-0 bg-gray-2" />
		<main class="grow flex w-full h-0 bg-gray-1">
			<div class="w-60 shrink-0 bg-info"></div>
			<div class="w-20 shrink-0 mx-4 bg-info"></div>
			<div class="grow w-0 h-full flex flex-col bg-info">
				<div class="h-16 shrink-0 bg-green-6"></div>
				<div class="grow w-full overflow-x-scroll flex bg-gray">
					<div v-for="item in 30" class="w-20 shrink-0">
            <div>列表-{{ item }}</div>
          </div>
				</div>
				<div class="h-16 shrink-0 bg-green-5"></div>
			</div>
		</main>
		<footer class="h-20 shrink-0 bg-gray-4" >
      <input class="px-1 py-2px mr-2 rounded focus:(ring-primary ring-2 ring-offset-2)" placeholder="请输入查询条件" />
    </footer>
	</div>
</template>

<style scoped lang="scss"></style>
