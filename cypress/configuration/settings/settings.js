const baseSettings = require('./baseSettings.js').BaseSettings;

class Settings extends baseSettings {
	constructor() {
		super();
	}

	getSettings() {
		return {
			browsers: {
				chrome: {
					env: this.browsers.chrome,
					data: {
						launchOptions: [],
						preferences: [],
					},
				},

				firefox: {
					env: this.browsers.firefox,
					data: {
						launchOptions: [],
						preferences: [],
					},
				},

				edge: {
					env: this.browsers.edge,
					data: {
						launchOptions: [],
						preferences: [],
					},
				},
			},
			devices: {
				desktop: {
					data: this.devices.desktop.resolution,
				},
				mobile: {
					data: {
						galaxys5: this.devices.mobile.galaxyS5,
					},
				},
				tablet: {
					data: {
						ipad: this.devices.tablet.ipad,
					},
				},
			},
		};
	}
}

module.exports.Settings = Settings;
