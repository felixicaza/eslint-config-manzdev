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
    "template-curly-spacing": "error",

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

    "unicorn/prefer-query-selector": "error",
    "unicorn/text-encoding-identifier-case": "error",
    "unicorn/template-indent": "error",
    "unicorn/switch-case-braces": "error",
    "unicorn/prefer-ternary": "error",
    "unicorn/prefer-switch": "error",
    "unicorn/prefer-structured-clone": "error",
    "unicorn/prefer-string-trim-start-end": "error",
    "unicorn/prefer-string-starts-ends-with": "error",
    "unicorn/prefer-string-replace-all": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-spread": "error",
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-dom-node-text-content": "error",
    "unicorn/prefer-dom-node-remove": "error",
    "unicorn/prefer-array-flat-map": "error",
    "unicorn/prefer-add-event-listener": "error",

    "@stylistic/js/semi": "error",
    "@stylistic/js/indent": ["error", 2]
  }
};
