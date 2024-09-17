import checkFile from "eslint-plugin-check-file";

export default {
  files: ["src/**/*"],
  plugins: {
    "check-file": checkFile,
  },
  rules: {
    "check-file/filename-naming-convention": ["error", {
      "src/**/*.{html,css}": "KEBAB_CASE",
      "src/**/*.{js,ts}": "CAMEL_CASE",
      "src/{classes,components}/**/*.{js,ts}": "PASCAL_CASE",
    }],
    "check-file/folder-naming-convention": ["error", {
      "src/**/": "CAMEL_CASE"
    }],
  }
};
