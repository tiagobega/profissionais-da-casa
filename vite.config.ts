import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig((config) => {
  function getBaseByMode() {
    switch (config.mode) {
      case "production": {
        return "https://profissionais.cadacasa.com.br/";
      }
      case "development": {
        return undefined;
      }
      case "homolog": {
        return undefined;
      }
    }
  }

  const base = getBaseByMode();

  return {
    plugins: [react(), tsconfigPaths()],
    base,
    server: {
      host: true,
    },
  };
});
