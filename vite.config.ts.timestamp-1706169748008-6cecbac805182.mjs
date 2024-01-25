// vite.config.ts
import { defineConfig, loadEnv } from "file:///Users/luoyi/Desktop/%E4%BC%9F%E5%8D%9A%E6%80%9D%E9%A1%B9%E7%9B%AE/workshop_terminal/node_modules/.pnpm/vite@5.0.12_@types+node@20.11.5_sass@1.70.0/node_modules/vite/dist/node/index.js";
import * as path from "path";
import vue from "file:///Users/luoyi/Desktop/%E4%BC%9F%E5%8D%9A%E6%80%9D%E9%A1%B9%E7%9B%AE/workshop_terminal/node_modules/.pnpm/@vitejs+plugin-vue@5.0.3_vite@5.0.12_vue@3.4.15/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsxPlugin from "file:///Users/luoyi/Desktop/%E4%BC%9F%E5%8D%9A%E6%80%9D%E9%A1%B9%E7%9B%AE/workshop_terminal/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.0.12_vue@3.4.15/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import UnoCSS from "file:///Users/luoyi/Desktop/%E4%BC%9F%E5%8D%9A%E6%80%9D%E9%A1%B9%E7%9B%AE/workshop_terminal/node_modules/.pnpm/unocss@0.58.3_postcss@8.4.33_vite@5.0.12/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///Users/luoyi/Desktop/%E4%BC%9F%E5%8D%9A%E6%80%9D%E9%A1%B9%E7%9B%AE/workshop_terminal/node_modules/.pnpm/unplugin-auto-import@0.17.3_@vueuse+core@10.7.2/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///Users/luoyi/Desktop/%E4%BC%9F%E5%8D%9A%E6%80%9D%E9%A1%B9%E7%9B%AE/workshop_terminal/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.15/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///Users/luoyi/Desktop/%E4%BC%9F%E5%8D%9A%E6%80%9D%E9%A1%B9%E7%9B%AE/workshop_terminal/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.15/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_dirname = "/Users/luoyi/Desktop/\u4F1F\u535A\u601D\u9879\u76EE/workshop_terminal";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: env.BUILD_BASE_URL,
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "src")
      }
    },
    plugins: [
      vue(),
      vueJsxPlugin(),
      UnoCSS(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ["vue", "vue-router", "pinia", "@vueuse/core"],
        dirs: ["./src/stores", "./src/utils", "./src/hooks"]
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dirs: ["src/components"],
        // 搜索目录
        extensions: ["vue", "tsx"],
        // 组件有效扩展名
        directoryAsNamespace: true,
        // 允许父文件夹作为组件名称前缀
        deep: true,
        // 搜索子目录
        dts: true
        // 生成d.ts描述文件
      })
    ],
    server: {
      host: "0.0.0.0",
      port: 5173
    },
    build: {
      cssCodeSplit: false,
      // css代码分割，true启用、false禁止
      chunkSizeWarningLimit: 2e3,
      // 文件大小超出警告，单位kb
      terserOptions: {
        compress: {
          //生产环境时移除console和debug
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          entryFileNames: `js/App.${(/* @__PURE__ */ new Date()).getTime()}.js`,
          chunkFileNames: `js/[name].${(/* @__PURE__ */ new Date()).getTime()}.js`,
          assetFileNames: `assets/[name].${(/* @__PURE__ */ new Date()).getTime()}.[ext]`,
          compact: true,
          manualChunks: {
            vue: ["vue", "vue-router", "pinia"],
            "element-plus": ["element-plus"]
          }
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbHVveWkvRGVza3RvcC9cdTRGMUZcdTUzNUFcdTYwMURcdTk4NzlcdTc2RUUvd29ya3Nob3BfdGVybWluYWxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9sdW95aS9EZXNrdG9wL1x1NEYxRlx1NTM1QVx1NjAxRFx1OTg3OVx1NzZFRS93b3Jrc2hvcF90ZXJtaW5hbC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbHVveWkvRGVza3RvcC8lRTQlQkMlOUYlRTUlOEQlOUElRTYlODAlOUQlRTklQTElQjklRTclOUIlQUUvd29ya3Nob3BfdGVybWluYWwvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlSnN4UGx1Z2luIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG5cdGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpXG5cdHJldHVybiB7XG5cdFx0YmFzZTogZW52LkJVSUxEX0JBU0VfVVJMLFxuXHRcdHJlc29sdmU6IHtcblx0XHRcdGFsaWFzOiB7XG5cdFx0XHRcdCdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRwbHVnaW5zOiBbXG5cdFx0XHR2dWUoKSxcblx0XHRcdHZ1ZUpzeFBsdWdpbigpLFxuXHRcdFx0VW5vQ1NTKCksXG5cdFx0XHRBdXRvSW1wb3J0KHtcblx0XHRcdFx0cmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcblx0XHRcdFx0aW1wb3J0czogWyd2dWUnLCAndnVlLXJvdXRlcicsICdwaW5pYScsICdAdnVldXNlL2NvcmUnXSxcblx0XHRcdFx0ZGlyczogWycuL3NyYy9zdG9yZXMnLCAnLi9zcmMvdXRpbHMnLCAnLi9zcmMvaG9va3MnXVxuXHRcdFx0fSksXG5cdFx0XHRDb21wb25lbnRzKHtcblx0XHRcdFx0cmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcblx0XHRcdFx0ZGlyczogWydzcmMvY29tcG9uZW50cyddLCAvLyBcdTY0MUNcdTdEMjJcdTc2RUVcdTVGNTVcblx0XHRcdFx0ZXh0ZW5zaW9uczogWyd2dWUnLCAndHN4J10sIC8vIFx1N0VDNFx1NEVGNlx1NjcwOVx1NjU0OFx1NjI2OVx1NUM1NVx1NTQwRFxuXHRcdFx0XHRkaXJlY3RvcnlBc05hbWVzcGFjZTogdHJ1ZSwgLy8gXHU1MTQxXHU4QkI4XHU3MjM2XHU2NTg3XHU0RUY2XHU1OTM5XHU0RjVDXHU0RTNBXHU3RUM0XHU0RUY2XHU1NDBEXHU3OUYwXHU1MjREXHU3RjAwXG5cdFx0XHRcdGRlZXA6IHRydWUsIC8vIFx1NjQxQ1x1N0QyMlx1NUI1MFx1NzZFRVx1NUY1NVxuXHRcdFx0XHRkdHM6IHRydWUgLy8gXHU3NTFGXHU2MjEwZC50c1x1NjNDRlx1OEZGMFx1NjU4N1x1NEVGNlxuXHRcdFx0fSlcblx0XHRdLFxuXHRcdHNlcnZlcjoge1xuXHRcdFx0aG9zdDogJzAuMC4wLjAnLFxuXHRcdFx0cG9ydDogNTE3M1xuXHRcdH0sXG5cdFx0YnVpbGQ6IHtcblx0XHRcdGNzc0NvZGVTcGxpdDogZmFsc2UsIC8vIGNzc1x1NEVFM1x1NzgwMVx1NTIwNlx1NTI3Mlx1RkYwQ3RydWVcdTU0MkZcdTc1MjhcdTMwMDFmYWxzZVx1Nzk4MVx1NkI2MlxuXHRcdFx0Y2h1bmtTaXplV2FybmluZ0xpbWl0OiAyMDAwLCAvLyBcdTY1ODdcdTRFRjZcdTU5MjdcdTVDMEZcdThEODVcdTUxRkFcdThCNjZcdTU0NEFcdUZGMENcdTUzNTVcdTRGNERrYlxuXHRcdFx0dGVyc2VyT3B0aW9uczoge1xuXHRcdFx0XHRjb21wcmVzczoge1xuXHRcdFx0XHRcdC8vXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU2NUY2XHU3OUZCXHU5NjY0Y29uc29sZVx1NTQ4Q2RlYnVnXG5cdFx0XHRcdFx0ZHJvcF9jb25zb2xlOiB0cnVlLFxuXHRcdFx0XHRcdGRyb3BfZGVidWdnZXI6IHRydWVcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdFx0b3V0cHV0OiB7XG5cdFx0XHRcdFx0ZW50cnlGaWxlTmFtZXM6IGBqcy9BcHAuJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX0uanNgLFxuXHRcdFx0XHRcdGNodW5rRmlsZU5hbWVzOiBganMvW25hbWVdLiR7bmV3IERhdGUoKS5nZXRUaW1lKCl9LmpzYCxcblx0XHRcdFx0XHRhc3NldEZpbGVOYW1lczogYGFzc2V0cy9bbmFtZV0uJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX0uW2V4dF1gLFxuXHRcdFx0XHRcdGNvbXBhY3Q6IHRydWUsXG5cdFx0XHRcdFx0bWFudWFsQ2h1bmtzOiB7XG5cdFx0XHRcdFx0XHR2dWU6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInLCAncGluaWEnXSxcblx0XHRcdFx0XHRcdCdlbGVtZW50LXBsdXMnOiBbJ2VsZW1lbnQtcGx1cyddXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4VixTQUFTLGNBQWMsZUFBZTtBQUNwWSxZQUFZLFVBQVU7QUFDdEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQVBwQyxJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN6QyxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFDM0MsU0FBTztBQUFBLElBQ04sTUFBTSxJQUFJO0FBQUEsSUFDVixTQUFTO0FBQUEsTUFDUixPQUFPO0FBQUEsUUFDTixLQUFVLGFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQ25DO0FBQUEsSUFDRDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1IsSUFBSTtBQUFBLE1BQ0osYUFBYTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLFFBQ1YsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsUUFDakMsU0FBUyxDQUFDLE9BQU8sY0FBYyxTQUFTLGNBQWM7QUFBQSxRQUN0RCxNQUFNLENBQUMsZ0JBQWdCLGVBQWUsYUFBYTtBQUFBLE1BQ3BELENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNWLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLFFBQ2pDLE1BQU0sQ0FBQyxnQkFBZ0I7QUFBQTtBQUFBLFFBQ3ZCLFlBQVksQ0FBQyxPQUFPLEtBQUs7QUFBQTtBQUFBLFFBQ3pCLHNCQUFzQjtBQUFBO0FBQUEsUUFDdEIsTUFBTTtBQUFBO0FBQUEsUUFDTixLQUFLO0FBQUE7QUFBQSxNQUNOLENBQUM7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUDtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ04sY0FBYztBQUFBO0FBQUEsTUFDZCx1QkFBdUI7QUFBQTtBQUFBLE1BQ3ZCLGVBQWU7QUFBQSxRQUNkLFVBQVU7QUFBQTtBQUFBLFVBRVQsY0FBYztBQUFBLFVBQ2QsZUFBZTtBQUFBLFFBQ2hCO0FBQUEsTUFDRDtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2QsUUFBUTtBQUFBLFVBQ1AsZ0JBQWdCLFdBQVUsb0JBQUksS0FBSyxHQUFFLFFBQVEsQ0FBQztBQUFBLFVBQzlDLGdCQUFnQixjQUFhLG9CQUFJLEtBQUssR0FBRSxRQUFRLENBQUM7QUFBQSxVQUNqRCxnQkFBZ0Isa0JBQWlCLG9CQUFJLEtBQUssR0FBRSxRQUFRLENBQUM7QUFBQSxVQUNyRCxTQUFTO0FBQUEsVUFDVCxjQUFjO0FBQUEsWUFDYixLQUFLLENBQUMsT0FBTyxjQUFjLE9BQU87QUFBQSxZQUNsQyxnQkFBZ0IsQ0FBQyxjQUFjO0FBQUEsVUFDaEM7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
