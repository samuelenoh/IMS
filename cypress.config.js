// const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor")
// const browserify = require("@cypress/browserify-preprocessor")
// async function setupNodeEvents(on, config){
//   await preprocessor.addCucumberPreprocessorPlugin(on, config)
//   on("file:preprocessor", browserify.default(config));
//   return config;
// }
// const { defineConfig } = require("cypress");
// module.exports = {
//   env:{
//     url: "https://incident-management-frontend.amalitech-dev.net/",
//   },
//   projectId: "wmmb4s",
//   e2e: {
//     setupNodeEvents,
//     // specPattern : 'cypress/e2e/BDD/*.feature', 
    
//   testIsolation: false,
//   },
//   defaultCommandTimeout: 5000, // Set the default command timeout to 5 seconds
//   viewportWidth: 1200,         // Set the default viewport width to 1200 pixels
//   viewportHeight: 800,         // Set the default viewport height to 800 pixels
//   on: {
//     // Intercept uncaught exceptions and prevent Cypress from failing the test
//     'uncaught:exception'(err, runnable) {
//       console.error('Uncaught Exception:', err.message);
//       return false;
//     }
//   }
// };
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wmmb4s',
  env:{
    url: "https://incident-management-frontend.amalitech-dev.net/",
  },
  e2e: {
    setupNodeEvents(on, config) { 
      // implement node event listeners here
    },
    
    testIsolation: false,
  },
  defaultCommandTimeout: 5000, // Set the default command timeout to 5 seconds
  viewportWidth: 1200,         // Set the default viewport width to 1200 pixels
  viewportHeight: 800,         // Set the default viewport height to 800 pixels
  on: {
    // Intercept uncaught exceptions and prevent Cypress from failing the test
    'uncaught:exception'(err, runnable) {
      console.error('Uncaught Exception:', err.message);
      return false;
    }
  },
});
