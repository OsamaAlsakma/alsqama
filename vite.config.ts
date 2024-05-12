import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/alsqama/",
  plugins: [
    react({
      babel: {
        babelrc: true,
      },
    }),
  ],

  esbuild: {
    jsxInject: `import React from 'react';`,
  },

  // relative imports
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
