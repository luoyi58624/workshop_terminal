export const breakpointOption = {
	xs: 0,
	sm: 540,
	md: 768,
	lg: 1024,
	xl: 1280,
	'2xl': 1440
}

const mobile = 'sm'

export const useBreakpointStore = defineStore('breakpoint', {
	state: () => ({
		name: '',
		width: 0,
		height: 0,
		mobile: false,
		xs: false,
		sm: false,
		md: false,
		lg: false,
		xl: false
	}),
	actions: {
		initBreakpoint() {
			const onResize = () => {
				this.$reset()
				this.width = window.innerWidth
				this.height = window.innerHeight
				this.mobile = this.width <= breakpointOption[mobile]
				if (this.width <= breakpointOption.sm) {
					this.xs = true
					this.name = 'xs'
				} else if (this.width <= breakpointOption.md) {
					this.sm = true
					this.name = 'sm'
				} else if (this.width <= breakpointOption.lg) {
					this.md = true
					this.name = 'md'
				} else if (this.width <= breakpointOption.xl) {
					this.lg = true
					this.name = 'lg'
				} else {
					this.xl = true
					this.name = 'xl'
				}
			}
			onResize()
			onMounted(() => {
				window.addEventListener('resize', onResize)
			})

			onUnmounted(() => {
				window.removeEventListener('resize', onResize)
			})
		}
	}
})
