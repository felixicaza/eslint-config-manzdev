import globals from "globals";

import promise from "eslint-plugin-promise";
import wc from "eslint-plugin-wc";
import unicorn from "eslint-plugin-unicorn";
import stylistic from "@stylistic/eslint-plugin-js";
import regexp from "eslint-plugin-regexp";

export default {
  ...stylistic.configs["all-flat"],
  ...unicorn.configs["flat/recommended"],
  ...promise.configs["flat/recommended"],
  ...wc.configs["flat/recommended"],
  ...wc.configs["flat/best-practice"],
  files: [
    "**/*.js",
    "**/*.cjs",
    "**/*.mjs"
  ],
  ignores: ["**/*.test.js"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      ...globals.browser,
      ...globals.builtin
    }
  },
  plugins: {
    //    jsdoc,
    promise,
    unicorn,
    regexp,
    wc,
    "@stylistic/js": stylistic
    // node,
  },
  rules: {
    "no-unused-vars": "error",
    "no-await-in-loop": "error",
    "no-template-curly-in-string": "error",
    "arrow-body-style": [
      "error",
      "as-needed"
    ],
    "max-lines": [
      "error",
      {
        max: 500,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    "max-lines-per-function": [
      "error",
      {
        max: 250,
        skipBlankLines: true,
        skipComments: true
      }
    ],

    "no-unneeded-ternary": "error",
    "no-script-url": "error",
    "no-sequences": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",

    // WebComponents
    "wc/define-tag-after-class-definition": "error",
    "wc/expose-class-on-global": "error",
    "wc/file-name-matches-element": "error",
    "wc/guard-define-call": "error",
    "wc/max-elements-per-file": "error",
    "wc/no-constructor": "error",
    "wc/no-exports-with-element": "error",
    "wc/no-method-prefixed-with-on": "error",
    "wc/tag-name-matches-class": "error",

    ...regexp.configs["flat/recommended"].rules,
    ...unicorn.configs["flat/recommended"].rules,
    "unicorn/filename-case": "off",
    "unicorn/no-empty-file": "warn"
  }
};
