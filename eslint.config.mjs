import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-duplicate-imports": "off",
      "no-use-before-define": "error",
      "constructor-super": "error",
      "no-warning-comments": "warn",
      "no-unreachable": "warn",
      "no-extra-boolean-cast": "warn",
    },
  },
];
