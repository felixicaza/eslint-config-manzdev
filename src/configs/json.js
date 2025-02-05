import json from "eslint-plugin-jsonc";

export default [
  ...json.configs["flat/recommended-with-jsonc"],
  {
    name: "manzdev/jsonc",
    files: ["src/**/*.json", "src/**/*.json5", "src/**/*.jsonc"],
    rules: {}
  }
];
