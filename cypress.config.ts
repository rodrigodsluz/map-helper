/* eslint-disable no-param-reassign */
import { defineConfig } from 'cypress';
import { cypressBrowserPermissionsPlugin } from 'cypress-browser-permissions';

export default defineConfig({
  env: {
    browserPermissions: {
      notifications: 'allow',
      geolocation: 'allow',
    },
  },
  chromeWebSecurity: false,
  projectId: 'rg9v1o',
  e2e: {
    setupNodeEvents(on, config) {
      config = cypressBrowserPermissionsPlugin(on, config);
      return config;
    },
  },
});
