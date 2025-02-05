import neostandard from "neostandard";

// Configs
import htmlConfig from "../configs/html.js";
import importsConfig from "../configs/imports.js";
import javascriptConfig from "../configs/javascript.js";
import jestConfig from "../configs/jest.js";
import jsonConfig from "../configs/json.js";
import packageJson from "../configs/packageJson.js";
import yamlConfig from "../configs/yaml.js";

export default [
  ...neostandard(),
  {
    rules: {
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
    },
  },
  importsConfig,
  htmlConfig,
  javascriptConfig,
  jestConfig,
  ...packageJson,
  ...yamlConfig,
  ...jsonConfig
];
