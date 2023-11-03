import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	server: {
	    proxy: {
	      // 在此处为需要解决跨域的 API 配置代理
	      '/api': {
	        target: 'http://127.0.0.1:8000/',
	        changeOrigin: true,
	        rewrite: path => path.replace(/^\/api/, '') // 去掉 /api 前缀
	      }
	    }
	  },
	optimizeDeps: {
		include: ['schart.js']
	}
});
