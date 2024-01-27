<script setup lang="tsx">
import loginBg from '@/assets/login_bg.jpg'
import {breakpointOption} from "@/stores/breakpoint.ts";

const router = useRouter()
const breakpointStore = useBreakpointStore();
const finishInfoList = ref<Array<any>>([])

const collapse = useStorage('collapse_info', false)

function skipMore() {
  router.push('/test')
}

// 打开附件图纸
function openDrawing() {

}

onBeforeMount(() => {
  finishInfoList.value = [
    {
      time: '今日',
      finishCount: 2,
      planTime: 4
    },
    {
      time: '昨日',
      finishCount: 2,
      planTime: 4
    },
    {
      time: '本周',
      finishCount: 2,
      planTime: 4
    },
    {
      time: '本月',
      finishCount: 2,
      planTime: 4
    }
  ]
})

const Dom1 = () => (
    <div class="flex rounded overflow-hidden bg-info xs:(h-36 w-60 shrink-0) lg:(h-36 w-full)">
      <div class="grow py-8 text-sky xs:(text-sm pl-2) lg:(text-base pl-4)">
        <p>姓名：{'吴佳乐'}</p>
        <p class="my-2">工作中心：{'CNC'}</p>
        <p>机台编号：{'CNC10'}</p>
      </div>
      <img src={loginBg} alt="头像" class="h-full aspect-[3/4]"/>
    </div>
)

const Dom2 = () => (
    <div class="xs:(w-60 my-0 mx-4 text-sm) lg:(w-full my-8 mx-0 text-base)">
      <div class="flex justify-between xs:items-center lg:items-end">
        <p class="text-red-5 font-bold">加工中信息</p>
        <a class="xs:text-xs lg:text-sm cursor-pointer text-white" onClick={skipMore}>查看更多 ></a>
      </div>
      <p class="text-primary mt-1">生产订单：{'PO23140122003'}</p>
      <p class="text-primary xs:mt-0 lg:mt-1">物料编码：{'BC-210229-A002'}</p>
      <div class="flex">
        <span class="text-primary xs:mt-0 lg:mt-1">计划工时：{'4H'}</span>
        <span class="text-primary ml-8 xs:mt-0 lg:mt-1">数量：{'2'}</span>
      </div>
      <p class="text-primary xs:mt-0 lg:mt-1">计划开始：{'2024-01-22 10:30'}</p>
      <p class="text-primary xs:mt-0 lg:mt-1">计划结束：{'2024-02-06 16:00'}</p>
      <p class="text-primary flex xs:mt-0 lg:mt-1">附件图纸：<Search class="ml-2" onClick={openDrawing}/></p>
    </div>
)

const Dom3 = () => (
    <div class=" xs:(w-60 my-0 text-sm) lg:(w-full my-8 text-base)">
      <p class="text-red-5 font-bold">完工信息小计</p>
      <table class="w-full mt-2">
        <thead>
        <tr class="bg-info w-full">
          <th class="text-primary xs:py-1 lg:py-2">时段</th>
          <th class="text-primary">完成数量</th>
          <th class="text-primary">计划工时</th>
        </tr>
        </thead>
        {
          finishInfoList.value.map(item => (
                  <tr class="text-center">
                    <td class="text-primary xs:py-0 lg:py-1">{item['time']}</td>
                    <td class="text-primary">{item['finishCount']}</td>
                    <td class="text-primary">{item['planTime']}</td>
                  </tr>
              )
          )
        }
      </table>
    </div>
)
</script>

<template>
	<div class="rounded bg-info/80 xs:(w-full) lg:(h-full w-80 shrink-0)">
		<el-scrollbar>
			<div class="p-2 xs:hidden md:(flex flex-row justify-between) lg:(flex flex-col)">
				<Dom1 />
				<Dom2 />
				<Dom3 />
			</div>
		</el-scrollbar>
	</div>
</template>

<style scoped lang="scss"></style>
