module.exports = {
  env:{
    url: "https://incident-management-frontend.amalitech-dev.net/",
  },
  projectId: "wmmb4s",
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
  }
};
