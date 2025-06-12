import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// 自定义插件，用于拦截对public目录的错误引用
const publicPathFixer = () => {
  return {
    name: 'public-path-fixer',
    resolveId(id) {
      // 将/public/路径转换为/路径
      if (id && id.startsWith('/public/')) {
        return id.replace('/public/', '/');
      }
      return null;
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    publicPathFixer()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
