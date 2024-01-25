import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss'

import { colors } from 'unocss/preset-mini'

const colorType = ['primary', 'success', 'warning', 'error', 'info']

export default defineConfig({
	presets: [
		presetUno({
			dark: 'media'
		}),
		presetIcons({
			prefix: 'i-',
			scale: 1.5
		}),
		presetAttributify(),
		presetTypography()
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	theme: {
		breakpoints: {
			xs: '0px',
			sm: '540px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1440px'
		},
		colors: {
			primary: '#fff422',
			secondPrimary: '#599cfe',
			success: colors.teal,
			warning: colors.amber,
			error: colors.red,
			info: '#37506e'
		}
	},
	shortcuts: [
		{
			'flex-center': 'flex justify-center items-center',
			'inline-flex-center': 'inline-flex justify-center items-center'
		},
		[
			/^btn-(.*)$/,
			([, c]) => `px-4 py-2 rounded-1 select-none text-white bg-${c} disabled:(bg-gray-3/80 cursor-not-allowed)`
		],
		[/^base-btn-(.*)$/, ([, c]) => `btn-${c} hover:enabled:text-primary`],
		[/^ring-btn-(.*)$/, ([, c]) => `btn-${c} m-transition hover:enabled:(ring-2 ring-offset-2 ring-${c})`],
		[
			/^input-(.*)$/,
			([, c]) =>
				`h-12 border-2 px-2 rounded text-lg bg-transparent hover:border-${c} focus:(outline-none border-${c} caret-${c})`
		]
	],
	rules: [
		['m-transition', { transition: 'all ease-out 0.3s' }],
		[
			/^scrollbar-hide$/,
			() => {
				return `
					.scrollbar-hide{
						-ms-overflow-style: none; 
						scrollbar-width: none; 
					}	
					.scrollbar-hide::-webkit-scrollbar{
						display: none;
					}				 
				 `
			}
		]
	],
	safelist: [
		// ...'prose prose-sm m-auto text-left'.split(' '),
		// ...colorType.map(item => {
		// 	return `bg-${item}`
		// }),
		// ...colorType.map(item => {
		// 	return `text-${item}`
		// })
	]
})
