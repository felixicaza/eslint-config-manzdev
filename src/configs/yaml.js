import yml from "eslint-plugin-yml";

export default [
  ...yml.configs["flat/recommended"],
  {
    name: "manzdev/yaml",
    files: ["src/**/*.yml", "src/**/*.yaml"],
    rules: {}
  }
];
