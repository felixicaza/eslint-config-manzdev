import neostandard from "neostandard";

import files from "./configs/files.js";
import html from "./configs/html.js";
import imports from "./configs/imports.js";
import javascript from "./configs/javascript.js";
import jest from "./configs/jest.js";
import json from "./configs/json.js";

export default [
  ...neostandard(),
  {
    rules: {
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"]
    }
  },
  files,
  json,
  html,
  javascript,
  imports,
  jest
];
