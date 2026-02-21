import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt().append({
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-mutating-props": "error",
    "vue/html-self-closing": "off",
  },
});
