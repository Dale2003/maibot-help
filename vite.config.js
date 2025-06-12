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
  },
  // 增加构建配置
  build: {
    assetsInlineLimit: 0, // 禁用小资源内联，确保所有资源都作为文件输出
    rollupOptions: {
      output: {
        // 为静态资源配置自定义命名
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          let extType = info[info.length - 1];
          if (/\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo.name)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  // 基础路径配置，对于Vercel部署非常重要
  base: '/'
});
