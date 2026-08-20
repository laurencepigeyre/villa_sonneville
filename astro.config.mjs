// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Montserrat",
      cssVariable: "--font-montserrat",
      provider: fontProviders.local(),
      options: {
        variants: [
          { src: ["src/assets/fonts/Montserrat-Regular.ttf"] },
          { src: ["src/assets/fonts/Montserrat-Medium.ttf"] },
        ],
      },
    },
  ],
});