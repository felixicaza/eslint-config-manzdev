import neostandard from "neostandard";

// Configs
import htmlConfig from "./html.js";
import importsConfig from "./imports.js";
import javascriptConfig from "./javascript.js";
import jestConfig from "./jest.js";
import jsonConfig from "./json.js";

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
  jsonConfig
];
