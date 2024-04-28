const { defineConfig } = require("cypress");
const {
  cypressBrowserPermissionsPlugin,
} = require("cypress-browser-permissions");

module.exports = defineConfig({
  requestTimeout: 10000,
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      config = cypressBrowserPermissionsPlugin(on, config)
    },
    specPattern: "cypress/e2e/**/*.spec.*",
    baseUrl: "https://project-react-vite.vercel.app/",
  },
  env: {
    browserPermissions: {
      geolocation: "allow",
      
    },
  },
});
