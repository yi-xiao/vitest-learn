import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
	return {
		plugins: [
			vue(),
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
				'@css': resolve(__dirname, 'src/assets/css/'),
				'@imgs': resolve(__dirname, 'src/assets/imgs/'),
				'@common': resolve(__dirname, 'src/views/common/'),
				'@comps': resolve(__dirname, 'src/components/'),
				'@apis': resolve(__dirname, 'src/apis/'),
				'@utils': resolve(__dirname, 'src/utils/'),
			},
		},
	}
})