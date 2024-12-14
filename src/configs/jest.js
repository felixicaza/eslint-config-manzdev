import jest from "eslint-plugin-jest";

const { globals } = jest.environments.globals;

export default {
  name: "manzdev/jest",
  files: ["**/*.spec.js", "**/*.test.js"],
  plugins: { jest },
  languageOptions: { globals },
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
  }
};
