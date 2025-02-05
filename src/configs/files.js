import checkFile from "eslint-plugin-check-file";

export default {
  name: "manzdev/files",
  files: ["src/**/*"],
  plugins: {
    "check-file": checkFile,
  },
  rules: {},
};
