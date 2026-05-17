// @ts-check
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./e2e",
  timeout: 120000,
  retries: 0,
  workers: 1,
  reporter: "list",
  use: {
    trace: "on-first-retry"
  }
});
