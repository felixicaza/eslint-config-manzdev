import checkFile from "eslint-plugin-check-file";

export default function filesConfig (config) {
  const { basePath = "src/**/*", rules } = config;

  return {
    name: "manzdev/files",
    files: [basePath],
    plugins: {
      "check-file": checkFile,
    },
    rules,
  };
};
