import sort from "eslint-plugin-simple-import-sort";
import unused from "eslint-plugin-unused-imports";

export default {
  name: "manzdev/imports",
  plugins: {
    "unused-imports": unused,
    "simple-import-sort": sort
  },
  rules: {
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  }
};
