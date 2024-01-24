/* 判空函数 */
import dayjs from 'dayjs'
import { RouteRecordRaw } from 'vue-router'
import router from '@/router'

/**
 * 判断一个对象 || 数组 || 字符串(包括空格) 是否为空
 * @example null、undefined、'undefined'、[]、''、' '
 * @param obj
 * @return {boolean}
 */
export function isEmpty(obj: any) {
	if (obj === null || obj === undefined || obj === 'undefined') {
		return true
	} else if (Array.isArray(obj)) {
		return obj.length === 0
	} else if (typeof obj === 'string') {
		return obj.trim().length === 0
	} else {
		return false
	}
}

/**
 * 验证邮箱格式是否正确
 * */
export function verifyEmail(email: string) {
	const emailReg = new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.com)$/)
	return emailReg.test(email)
}

/**
 * 验证手机号码格式是否正确
 * */
export function verifyPhoneNumber(phoneNumber: string) {
	const regex =
		/^1(3([0-35-9]\\d|4[1-8])|4[14-9]\\d|5([0125689]\\d|7[1-79])|66\\d|7[2-35-8]\\d|8\\d{2}|9[13589]\\d)\\d{7}$/
	return regex.test(phoneNumber)
}

/* 判断用户终端环境是否是PC端 */
export function isPC() {
	return isEmpty(navigator.userAgent.match(/iPhone|iPad|Android|Windows Phone/))
}

/* 获取浏览器信息：类型和版本号 */
export function getExplorerInfo(): { type: string; version: number } {
	let explorerInfo: any = null // 浏览器信息对象
	const explorer = navigator.userAgent // 获取浏览器信息
	const explorerMatch = explorer.match(/Chrome|Firefox|Trident|Version/) // 解析浏览器类型
	if (isEmpty(explorerMatch)) {
		// 若解析成功则开始解析版本号
		console.error('未知的浏览器内核：' + explorer)
	} else {
		switch (explorerMatch![0]) {
			case 'Chrome':
				explorerInfo = {
					type: 'Chrome',
					version: explorer.match(/Chrome\/(\d+)/)![1]
				}
				break
			case 'Firefox':
				explorerInfo = {
					type: 'Firefox',
					version: explorer.match(/Firefox\/(\d+)/)![1]
				}
				break
			case 'Trident':
				{
					const IEVersion = explorer.match(/MSIE (\d+)/)
					if (IEVersion === null) {
						explorerInfo = {
							type: 'IE',
							version: 11
						}
					} else {
						explorerInfo = {
							type: 'IE',
							version: IEVersion[1]
						}
					}
				}
				break
			case 'Version':
				explorerInfo = {
					type: 'Iphone',
					version: explorer.match(/Version\/(\d+)/)![1]
				}
		}
		explorerInfo!.version = Number(explorerInfo!.version) // 将版本信息转化成Number类型
	}
	return explorerInfo
}

/**
 * 解析日期
 * @param date
 * @param format
 * @returns {string}
 */
export function formatDate(date: any, format?: string) {
	if (isEmpty(date)) {
		return undefined
	} else {
		format = format || 'YYYY-MM-DD HH:mm:ss'
		return dayjs(date).format(format)
	}
}

/**
 * 打印DOM的属性，而非其结构
 * @param el
 */
export function printDom(el: any) {
	const obj: any = {}
	for (const prop in el) {
		obj[prop] = el[prop]
	}
	console.log(obj)
}

/*创建图片上传*/
export function uploadImage(name: any) {
	return new Promise((resolve, reject) => {
		const input = document.createElement('input')
		input.setAttribute('type', 'file')
		input.setAttribute('accept', 'image/*')
		input.onchange = function () {
			// @ts-ignore
			const file = this.files[0]
			const reader = new FileReader()
			reader.onload = function () {
				const formData = new FormData()
				formData.append(name, file)
				resolve(formData)
			}
			reader.onerror = function () {
				reject(new Error('图片读取失败'))
			}
			reader.readAsDataURL(file) // 读取选中的文件，读取成功后会触发onload事件
		}
		input.click() // 触发点击事件，打开文件选择
	})
}

/**
 * 异步延迟执行
 * @param time  延迟时间，单位毫秒
 * @returns {Promise<void>}
 */
export async function sleep(time?: number) {
	time = time || 1000
	await execTimeout(time)

	function execTimeout(time: number) {
		return new Promise(resolve => setTimeout(resolve, time))
	}
}

/**
 * 添加动态路由
 * @param routes          添加的路由
 * @param parentRouteName 父级路由名字
 */
export function addDynamicRoute(routes: RouteRecordRaw | Array<RouteRecordRaw>, parentRouteName?: string) {
	if (Array.isArray(routes)) {
		routes.forEach(route => {
			if (parentRouteName) router.addRoute(parentRouteName, route)
			else router.addRoute(route)
		})
	} else {
		if (parentRouteName) router.addRoute(parentRouteName, routes)
		else router.addRoute(routes)
	}
}
