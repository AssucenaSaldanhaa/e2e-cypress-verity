const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.verity.com.br/',
    setupNodeEvents(on, config) { },
    defaultCommandTimeout: 25000,
    viewportWidth: 1360,
    viewportHeight: 768,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true
  }
})