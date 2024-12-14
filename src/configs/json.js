import json from "eslint-plugin-json";

export default {
  name: "manzdev/json",
  files: ["**/*.json"],
  plugins: { json },
  processor: "json/json",
  // TODO: Add rules
  rules: {}
};
