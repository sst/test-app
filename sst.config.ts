/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "test-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  ci: {
    runner: (input) => ({
      architecture: "arm64",
    }),
    target(event) {
      if (event.type === "push") return { stage: event.branch };
    },
  },
  async run() {
    return {
      foo: "9",
    };
  },
});
