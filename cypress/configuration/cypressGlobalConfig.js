/// <reference types="cypress" />

const program = require('commander');
const settings = require('./settings/settings.js').Settings;

// NOTE: Implement program options for console scripts
const opt = new settings().cliProgramOptions.programOptions.map(
	(argv) => argv.optionArgv
);
const optDesc = new settings().cliProgramOptions.programOptions.map(
	(desc) => desc.description
);
program.version('0.0.1');
if (opt.length && optDesc.length) {
	for (let i in opt) {
		program.option(opt[i], optDesc[i]);
	}
} else {
	throw Error(
		`The program: option or description, was specified incorrectly or the value is empty:\nProgram option list: ${opt}\nProgram description list: ${optDesc}`
	);
}

// NOTE: must be before .parse() since
// NOTE: node's emit() is immediat
program.on('--help', () => {
	console.log('');
	console.log('Examples:');
	console.log('  $ node cypress-starter.js --help');
	console.log('  $ node cypress-starter.js -h');
});

program.parse(process.argv);

// NOTE: Check the program.args obj
const noCommandSpecifies = process.argv.length <= 2;

if (noCommandSpecifies) {
	program.help();
} else {
	console.log('Program options used during startup:');
	if (program.debug) console.log(program.opts());
	const optLogArgv = new settings().cliProgramOptions.programLogArgv.map(
		(argv) => argv.programArgv
	);
	const argvDesc = new settings().cliProgramOptions.programLogArgv.map(
		(desc) => desc.description
	);
	if (optLogArgv.length && argvDesc.length) {
		for (let i in optLogArgv) {
			if (program[optLogArgv[i]]) console.log(argvDesc[i]);
		}
	} else {
		throw Error(
			`The log program option or description, was specified incorrectly or the value is empty:\nProgram option list: ${optLogArgv}\nProgram description list: ${argvDesc}`
		);
	}
}

class CypressGlobalConfig extends settings {
	constructor() {
		super();
	}

	setAppEnvironment() {
		if (program.uat) {
			this.appEnvironment = 'uat';
		} else {
			console.error(
				`Error: An invalid test environment has been selected for the application\ntest environment: ${this.appEnvironment}`
			);
			process.exit(1);
		}
	}

	getDeviceType() {
		return program.mobile ? 'mobile' : program.tablet ? 'tablet' : 'desktop';
	}

	getBrowserType() {
		return program.firefox
			? this.getSettings().browsers.firefox.env
			: program.edge
			? this.getSettings().browsers.edge.env
			: this.baseBrowser;
	}

	setEnvVariables() {
		let params = {};

		params.isMobile = this.getDeviceType() === 'mobile';
		params.isTablet = this.getDeviceType() === 'tablet';
		params.isDesktop = this.getDeviceType() === 'desktop';
		params.baseUrl = this.baseUrl;
		params.appEnv = this.appEnvironment;

		if (this.envVariablesArgvKey.length && this.envVariablesArgvValue.length) {
			for (let i in this.envVariablesArgvKey) {
				params[this.envVariablesArgvKey[i]] = this.envVariablesArgvValue[i];
			}
		}

		return params;
	}

	getConfigObj() {
		const {
			devices: { desktop },
			devices: { mobile },
			devices: { tablet },
		} = this.getSettings();

		return {
			browser: this.getBrowserType(),
			config: {
				baseUrl: this.baseUrl,
				firefoxGcInterval: this.firefoxGcInterval,
				// NOTE:  use default browser user agent
				...(this.getDeviceType() === 'desktop' && desktop.data),
				// NOTE: emulate galaxys 5
				...(this.getDeviceType() === 'mobile' &&
					program.galaxys5 &&
					mobile.data.galaxys5),
				// NOTE: emulate ipad
				...(this.getDeviceType() === 'tablet' &&
					program.ipad &&
					tablet.data.ipad),
				video: (this.videoRecord = false),
				chromeWebSecurity: this.chromeWebSecurity,
				defaultCommandTimeout: this.defaultCommandTimeout,
				execTimeout: this.execTimeout,
				taskTimeout: this.taskTimeout,
				pageLoadTimeout: this.pageLoadTimeout,
				requestTimeout: this.requestTimeout,
				responseTimeout: this.responseTimeout,
				port: this.port,
				waitForAnimations: this.waitForAnimations,
			},
		};
	}

	getCypressOptions(params = this.getConfigObj()) {
		this.setAppEnvironment();

		const config = {
			env: this.setEnvVariables(),
			browser: params.browser,
			baseUrl: params.config.baseUrl,
			config: params.config,
			configFile: params.configFile,
		};
		return config;
	}
}

module.exports.CypressGlobalConfig = CypressGlobalConfig;
