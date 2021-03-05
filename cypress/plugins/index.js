// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const path = require("path")

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('task', {
    failed: require('cypress-failed-log/src/failed')(),
  });

  on('before:browser:launch', (browser, launchOptions) => {
    const downloadDirectory = path.join(__dirname, '..', 'downloads');

    if (browser.family === 'chromium' && browser.name !== 'electron') {
      // NOTE: in Chromium, preferences can exist in Local State, Preferences, or Secure Preferences
      // via launchOptions.preferences, these can be acccssed as `localState`, `default`, and `secureDefault`

      // NOTE: for example, to set `somePreference: true` in Preferences:
      // launchOptions.preferences.default['preference'] = true;

      // auto open devtools
      launchOptions.args.push('--auto-open-devtools-for-tabs');
      launchOptions.preferences.default['download'] = {
        default_directory: downloadDirectory,
      };

      // whatever you return here becomes the launchOptions
      return launchOptions;
    }

    if (browser.family === 'firefox') {
      // NOTE: launchOptions.preferences is a map of preference names to values
      // launchOptions.preferences['some.preference'] = true;

      // auto open devtools
      launchOptions.args.push('-devtools');

      launchOptions.preferences['browser.download.dir'] = downloadDirectory
      launchOptions.preferences['browser.download.folderList'] = 2

      // needed to prevent download prompt for text/csv files.
      launchOptions.preferences['browser.helperApps.neverAsk.saveToDisk'] = 'text/csv'

      // whatever you return here becomes the launchOptions
      return launchOptions;
    }
  });
};
