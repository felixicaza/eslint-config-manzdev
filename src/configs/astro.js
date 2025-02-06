import parserAstro from "astro-eslint-parser";
import { configs as configsAstro, environments } from "eslint-plugin-astro";
import { parser as parserTs } from "typescript-eslint";

export default [
  ...configsAstro["flat/jsx-a11y-recommended"],
  ...configsAstro["flat/recommended"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      globals: environments.astro.globals,
      parser: parserAstro,
      parserOptions: {
        extraFileExtensions: [".astro"],
        parser: parserTs
      }
    },
    processor: "astro/client-side-ts",
    // TODO: Add rules
    rules: {}
  },
  {
    files: ["**/*.astro/*.{js,ts}"],
    processor: "astro/client-side-ts",
    // TODO: Add rules
    rules: {}
  }
];
