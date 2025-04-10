// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
		head: {
			title: 'Sidearm POC',
			htmlAttrs: {
				lang: 'en',
			},
			viewport: 'width=device-width, initial-scale=1, maximum-scale=10, user-scalable=1'
		}
	},
	modules: [
		'usebootstrap',
		['@nuxtjs/google-fonts', {
			families: {
				'Roboto': true,
				'Roboto+Condensed': true
			}
		}]
	],
	css: [
		'usebootstrap/scss/usebootstrap',
		'~/assets/scss/main.scss'
	],
	usebootstrap: {
		scss: true
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/assets/scss/_variables.scss";`,
				},
			},
		},
	}
})
