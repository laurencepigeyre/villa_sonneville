// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  
    fonts: [
      {
        name: "Montserrat",
        cssVariable: "--font-montserrat",
        provider: fontProviders.local(),
        options: {
          // Weight and style are not specified so Astro
          // will try to infer them for each variant
          variants: [
            {
              src: ["src/assets/fonts/Montserrat-Regular.ttf"],
            },
            {
              src: ["src/assets/fonts/Montserrat-Medium.ttf"],
            },
          ],
        },
      },
    ],
  });
