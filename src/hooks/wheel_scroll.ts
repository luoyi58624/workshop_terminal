import { Ref } from 'vue'

/** 鼠标滚轮滚动元素hook
 *  @param scrollElement 滚动容器元素
 *  @param options 额外选项
 *  */
export function useWheelScroll(
	scrollElement: Ref<HTMLElement | undefined>,
	options?: {
		activeIndex?: Ref<number>
	}
) {
	const scrollSize = 200 // 滚动距离
	const scrollSpeed = 8 // 滚动速度
	let scrollAnimation: any // 滚动动画
	let disableLeftScroll = false
	let disableRightScroll = false

	const scope = effectScope()

	function getScrollDom(): HTMLElement {
		return unref(scrollElement)!
	}

	// 鼠标滚轮滚动事件处理
	function scrollHandler(e: WheelEvent) {
		const scrollDom = getScrollDom()
		let i = 0 // 判断是否停止
		// 大于0（鼠标滚动向下滚）往右滚动，小于0（鼠标滚动向上滚）往左滚动
		if (e.deltaY > 0) {
			disableLeftScroll = false
			if (!disableRightScroll) {
				disableRightScroll = true
				if (scrollAnimation) clearInterval(scrollAnimation)
				scrollAnimation = setInterval(() => {
					i -= scrollSpeed
					if (i < -scrollSize) {
						clearInterval(scrollAnimation)
						disableRightScroll = scrollDom.scrollLeft + scrollDom.clientWidth >= scrollDom.scrollWidth
					} else {
						scrollDom.scrollLeft += scrollSpeed
					}
				}, 1)
			}
		} else if (e.deltaY < 0) {
			disableRightScroll = false
			if (!disableLeftScroll) {
				disableLeftScroll = true
				if (scrollAnimation) clearInterval(scrollAnimation)
				scrollAnimation = setInterval(() => {
					i += scrollSpeed
					if (i > scrollSize) {
						clearInterval(scrollAnimation)
						disableLeftScroll = scrollDom.scrollLeft <= 0
					} else {
						scrollDom.scrollLeft -= scrollSpeed
					}
				}, 1)
			}
		}
	}

	// 滚动到激活标签
	function moveActiveTab(activeTabDom: HTMLElement) {
		const scrollDom = getScrollDom()
		const { offsetLeft, clientWidth } = activeTabDom
		const value = Math.min(
			scrollDom.scrollWidth - scrollDom.clientWidth,
			Math.max(0, offsetLeft + clientWidth / 2 - scrollDom.clientWidth / 2)
		)
		if (value != 0) {
			disableLeftScroll = false
			disableRightScroll = false
		}
		scrollDom.scrollTo({
			left: value,
			behavior: 'smooth'
		})
	}

	useEventListener(window, 'resize', () => {
		disableLeftScroll = false
		disableRightScroll = false
	})

	onMounted(() => {
		getScrollDom().addEventListener('wheel', scrollHandler)
		scope.run(() => {
			if (options?.activeIndex != null) {
				watch(options.activeIndex, value => {
					const dom = getScrollDom().children[value] as HTMLElement
					moveActiveTab(dom)
				})
			}
		})
	})

	onBeforeUnmount(() => {
		getScrollDom().removeEventListener('wheel', scrollHandler)
		scope.stop()
	})
}
