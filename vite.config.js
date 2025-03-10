import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  assetsInclude: ["**/*.glb", "**/*.gltf", "**/*.hdr"],
  build: {
    target: "esnext",
    sourcemap: true,
    modulePreload: {
      polyfill: true,
    },
    chunkSizeWarningLimit: 1000,
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.name || "unknown";
          const extType = fileName.split(".").pop()?.toLowerCase() || "";

          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          }

          if (/glb|hdr|gltf|bin/i.test(extType)) {
            return `assets/models/[name]-[hash][extname]`;
          }

          if (/woff2?|ttf|eot|otf/i.test(extType)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }

          return `assets/[name]-[hash][extname]`;
        },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@react-three")) {
              return "vendor-react-three";
            } else if (id.includes("three")) {
              return "vendor-three";
            }
            return "vendor";
          }
        },
      },
    },
    cssCodeSplit: true,
  },
});
