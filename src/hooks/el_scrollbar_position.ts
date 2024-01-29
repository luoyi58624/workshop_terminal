import { Ref } from 'vue'
import { ElTable } from 'element-plus'

/**
 * 解决keep-alive页面缓存element-plus表格滚动条位置置顶问题
 * */
export function useElScrollbarPosition(elTableRef: Ref<ElTable>) {
	let scrollTop = 0

	function listenScroll(event: Event) {
		scrollTop = event.target.scrollTop
	}

	onActivated(() => {
		unref(elTableRef).setScrollTop(scrollTop)
	})

	onMounted(() => {
		unref(elTableRef).$refs.bodyWrapper.addEventListener('scroll', listenScroll, true)
	})

	onBeforeUnmount(() => {
		unref(elTableRef).$refs.bodyWrapper.removeEventListener('scroll', listenScroll)
	})
}
