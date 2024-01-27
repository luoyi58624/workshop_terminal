import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'virtual:uno.css'

import './styles/index.scss'

const app = createApp(App)

app.directive('focus', {
	beforeMount: el => {
		nextTick(() => {
			el.focus()
		})
	}
})

app.use(createPinia()).use(router).mount('#app')
