import checkFile from "eslint-plugin-check-file";

function filesConfig (config) {
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

export default filesConfig;
