/* eslint-disable filenames/no-index */

const RULES_BASE = require('./rules/base.rules.js');
const RULES_WARNINGS = require('./rules/warnings.rules.js');
const RULES_PLUGINS = {
	...require('./rules/filenames.plugin.rules'),
	...require('./rules/import.plugin.rules'),
	...require('./rules/unicorn.plugin.rules'),
};


module.exports = {
	env: {
		node: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	extends: [ 'eslint:recommended' ],
	plugins: [
		'filenames',
		'import',
		'unicorn',
	],

	overrides: [ {
		files: [ '*.test.js' ],
		env: { mocha: true },
		plugins: [ 'mocha' ],
		extends: [ 'plugin:mocha/recommended' ],
		rules: {
			'mocha/no-hooks': 'error',
			'mocha/valid-test-description': 'error',
		},
	}, {
		files: [ 'src/**/*' ],
		env: { browser: true },
		rules: { 'import/no-nodejs-modules': 'error' },
	}, {
		files: [ '*.script.js' ],
		rules: {
			'no-console': 'off',
			'no-process-exit': 'off',
		},
	} ],

	reportUnusedDisableDirectives: true,
	rules: {
		...RULES_BASE,
		...RULES_WARNINGS,
		...RULES_PLUGINS,
	},
};
