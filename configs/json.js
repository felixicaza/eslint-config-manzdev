import json from "eslint-plugin-json";

export default {
  files: ["**/*.json"],
  plugins: { json },
  processor: "json/json",
  rules: {}
};
