import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"

export default [
  { ignores: ["dist", "node_modules"] },
  js.configs.recommended,
  {
    ...reactHooks.configs.flat.recommended,
    files: ["src/**/*.{js,jsx}"],
  },
  {
    ...reactRefresh.configs.vite,
    files: ["src/**/*.{js,jsx}"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
]
