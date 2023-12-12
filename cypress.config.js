const { defineConfig } = require("cypress");

module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  
  defaultCommandTimeout: 5000, // Set a default command timeout
  video: true, // Enable video recording for test runs
  pageLoadTimeout: 15000, // in milliseconds
  
};

