module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "babel-plugin-styled-components",
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@global": "./src/global",
            "@hooks": "./src/hooks",
            "@mocks": "./src/mocks",
            "@navigations": "./src/navigations",
            "@pages": "./src/pages",
            "@screens": "./src/screens",
            "@store": "./src/store",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
