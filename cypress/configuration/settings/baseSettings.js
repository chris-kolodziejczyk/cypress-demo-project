class BaseSettings {
	constructor() {
		this.appEnvironment = '';
		this.baseBrowser = 'chrome';
		this.baseUrl = 'http://www.way2automation.com/angularjs-protractor';
		this.browsers = {
			chrome: 'chrome',
			firefox: 'firefox',
			edge: 'edge',
			electron: 'electron',
		};
		this.firefoxConsoleArgv = 'ffComandLine.properties';
		this.firefoxPreferencesArgv = 'ffPreferences.properties';
		this.chromiumPreferencesArgv = 'chromiumPreferences.properties';
		this.chromiumConsoleArgv = 'chromiumComandLine.properties';
		this.chromeWebSecurity = true;
		this.cliProgramOptions = {
			programOptions: [
				{
					optionArgv: '--debug',
					description: 'run debug program',
				},
				{
					optionArgv: '-d, --desktop',
					description: 'run test on base desktop resolution',
				},
				{
					optionArgv: '-m, --mobile',
					description: 'run test on mobile phone',
				},
				{
					optionArgv: '-t, --tablet',
					description: 'run test on tablet device',
				},
				{ optionArgv: '-c, --chrome', description: 'select browser: chrome' },
				{ optionArgv: '-f, --firefox', description: 'select browser: Firefox' },
				{ optionArgv: '-e, --edge', description: 'select browser: edge' },
				{ optionArgv: '--ipad', description: 'select device: Ipad' },
				{ optionArgv: '--galaxys5', description: 'select device: Galaxy S5' },
				{ optionArgv: '--uat', description: 'change environment to uat' },
				{ optionArgv: '-o, --open', description: 'open cypress window' },
			],
			programLogArgv: [
				{
					programArgv: 'desktop',
					description: '- run desktop program',
				},
				{
					programArgv: 'mobile',
					description: '- run mobile program',
				},
				{
					programArgv: 'uat',
					description: '- run uat program',
				},
				{
					programArgv: 'open',
					description: '- run cypress program',
				},
				{
					programArgv: 'firefox',
					description: '- run firefox program',
				},
				{
					programArgv: 'chrome',
					description: '- run chrome program',
				},
				{
					programArgv: 'edge',
					description: '- run edge program',
				},
				{
					programArgv: 'galaxys5',
					description: '- run galaxys5 program',
				},
				{
					programArgv: 'ipad',
					description: '- run ipad program',
				},
			],
		};
		this.defaultCommandTimeout = 30000;
		this.devices = {
			desktop: {
				resolution: { viewportWidth: 1366, viewportHeight: 768 },
			},
			mobile: {
				galaxyS5: {
					userAgent:
						'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Mobile Safari/537.36',
					viewportWidth: 360,
					viewportHeight: 640,
				},
			},
			tablet: {
				ipad: {
					userAgent:
						'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
					viewportWidth: 768,
					viewportHeight: 1024,
				},
			},
		};
		this.envVariablesArgvKey = [];
		this.envVariablesArgvValue = [];
		this.execTimeout = 30000;
		this.firefoxGcInterval = {
			runMode: null,
			openMode: null,
		};
		this.port = null;
		this.pageLoadTimeout = 30000;
		this.requestTimeout = 30000;
		this.responseTimeout = 30000;
		this.taskTimeout = 30000;
		this.videoRecord = true;
		this.waitForAnimations = true;
	}
}

module.exports.BaseSettings = BaseSettings;
