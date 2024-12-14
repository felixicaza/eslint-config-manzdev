import neostandard from "neostandard";

// Configs
import filesConfig from "./configs/files.js";
import importsConfig from "./configs/imports.js";
import htmlConfig from "./configs/html.js";
import javascriptConfig from "./configs/javascript.js";
import jestConfig from "./configs/jest.js";
import jsonConfig from "./configs/json.js";

/**
 * @typedef {Object} FilesOptions
 * @property {string} basePath - The base path for file-related rules.
 * @property {Object} rules - The rules for file-related configurations.
 */

/**
 * @typedef {Object} Options
 * @property {FilesOptions} files - Configuration for file-related rules.
 * @property {boolean} jest - Whether to include Jest configuration.
 * @property {boolean} json - Whether to include JSON configuration.
 */

/**
 * Generates an ESLint configuration array based on provided options.
 *
 * @param {Options} options - Options to customize the ESLint configuration.
 * @returns {Array} ESLint configuration array.
 */
export function manzdev(options = {}) {
  const { files = {}, jest = false, json = false } = options;

  const configs = [
    ...neostandard(),
    {
      rules: {
        "@stylistic/quotes": ["error", "double"],
        "@stylistic/semi": ["error", "always"],
      },
    },
    filesConfig(files),
    importsConfig,
    htmlConfig,
    javascriptConfig,
  ];

  if (jest) {
    configs.push(jestConfig);
  }
  if (json) {
    configs.push(jsonConfig);
  }

  return configs;
}