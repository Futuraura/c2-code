// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon"],
  postcss: {
    plugins: {},
  },
  app: {
    head: {
      title: "C2 Code",
      htmlAttrs: {
        lang: "en",
      },
      // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  fonts: {
    provider: "bunny",
    families: [
      {
        name: "JetBrains Mono",
        provider: "google",
      },
    ],
  },
});
