/* eslint-disable filenames/no-index -- Required by ESLint */

const RULES_BASE = require('./rules/base.rules.js');
const RULES_WARNINGS = require('./rules/warnings.rules.js');
const RULES_PLUGINS = {
	...require('./rules/eslint-comments.plugin.rules.js'),
	...require('./rules/filenames.plugin.rules.js'),
	...require('./rules/import.plugin.rules.js'),
	...require('./rules/unicorn.plugin.rules.js'),
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
		'eslint-comments',
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
			// Warnings
			'mocha/max-top-level-suites': 'warn',
			'mocha/no-exports': 'warn',
		},
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
