export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  ssr: false,

  // === LAYERS (auto-scanned from ~/layers/, loaded in alphabetical order) ===
  extends: ["./layers/shared", "./layers/auth", "./layers/users"],

  css: ["~/layers/shared/app/assets/css/tailwind.css", "vue-sonner/style.css"],

  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/eslint",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
  ],

  shadcn: {
    prefix: "",
    componentDir: "./layers/shared/app/components/ui",
  },

  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },

  colorMode: {
    preference: "system",
    fallback: "light",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storage: "cookie",
    storageKey: "nuxt-color-mode",
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || "/api",
    },
  },
  vite: {
    define: {
      __DEV__: true,
    },
  },
});
