import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#ff4d4f',
          'layout-header-background': '#fff',
          'layout-body-background': '#fff'
        },
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: [{ find: /^~/, replacement: '' }]
  },  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`
        }
      ]
    })
  ]
});

