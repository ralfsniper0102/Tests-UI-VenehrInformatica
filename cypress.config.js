const { defineConfig } = require("cypress");

module.exports = defineConfig({
  requestTimeout: 10000,
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.spec.*',
    baseUrl: 'https://project-react-vite.vercel.app/'
  },
});
