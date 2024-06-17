/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "test-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  console: {
    autodeploy: {
      runner: (input) => {},
      target: (event) => {
        return { stage: "master" };
      },
      steps: (event) => {},
    },
  },

  async run() {
    return {
      foo: "9",
    };
  },
});
