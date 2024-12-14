import { manzdev } from "./src/index.js";

export default manzdev({
  files: {
    basePath: "src/**/*",
    rules: {
      "check-file/filename-naming-convention": ["error", {
        "src/**/*.{html,css}": "KEBAB_CASE",
        "src/**/*.{js,ts}": "CAMEL_CASE",
        "src/{classes,components}/**/*.{js,ts}": "PASCAL_CASE",
      }],
      "check-file/folder-naming-convention": ["error", {
        "src/**/": "CAMEL_CASE"
      }],
    },
  },
});
