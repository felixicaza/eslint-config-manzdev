import eslintReact from "@eslint-react/eslint-plugin";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import { parser as parserTs } from "typescript-eslint";

const pluginReact = eslintReact.configs.all.plugins;

export default {
  files: ["**/*.{jsx,tsx}"],
  plugins: {
    "@eslint-react": pluginReact["@eslint-react"],
    "@eslint-react/dom": pluginReact["@eslint-react/dom"],
    "@eslint-react/web-api": pluginReact["@eslint-react/web-api"],
    "react-hooks": pluginReactHooks,
    "@eslint-react/hooks-extra": pluginReact["@eslint-react/hooks-extra"],
    "@eslint-react/naming-convention": pluginReact["@eslint-react/naming-convention"],
    "react-refresh": pluginReactRefresh
  },
  languageOptions: {
    parser: parserTs,
    parserOptions: {
      ecmaFeatures: { jsx: true }
    }
  },
  rules: {
    ...eslintReact.configs.recommended.rules,
    ...eslintReact.configs.dom.rules,
    ...eslintReact.configs["recommended-typescript"].rules,
    ...pluginReactHooks.configs.recommended.rules,
    ...pluginReactRefresh.configs.recommended.rules
  }
};
