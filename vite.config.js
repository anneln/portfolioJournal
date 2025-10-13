import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "images", // ton dossier racine "images"
        },
      ],
    }),
  ],
});
