import packageJson from "eslint-plugin-package-json/configs/recommended";

export default [
  packageJson,
  {
    name: "manzdev/package-json",
    files: ["package.json", "src/**/package.json"],
    rules: {}
  }
];
