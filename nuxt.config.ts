// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Rave Index",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  css: ["@/assets/css/index.scss"],
  imports: {
    dirs: ["server", "stores"],
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
