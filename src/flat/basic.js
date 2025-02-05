// Configs
import htmlConfig from "../configs/html.js";
import javascriptConfig from "../configs/javascript.js";
import jsonConfig from "../configs/json.js";
import packageJson from "../configs/packageJson.js";

export default [
  {
    rules: {
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
    },
  },
  htmlConfig,
  javascriptConfig,
  ...packageJson,
  ...jsonConfig
];
