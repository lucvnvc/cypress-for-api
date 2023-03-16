import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://jsonplaceholder.typicode.com',
    specPattern: 'cypress/api-test/*.{js,ts}',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: './results',
      overwrite: false,
      html: false,
      json: true,
    },
    video: false,
    env: {
      serverUrl: 'http://localhost:3000',
    },
    retries: {
      runMode: 1,
      openMode: 0,
    },
  },
});
