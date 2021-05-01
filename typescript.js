module.exports = {

	parser: '@typescript-eslint/parser',
	plugins: [ '@typescript-eslint' ],

	extends: [
		'./index.js',
		'plugin:@typescript-eslint/recommended',
	],

	overrides: [ {
		files: [ '*.test.ts' ],
		// TODO: share with mocha from index.js in some way
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
	} ],

	// TODO: figure out which TS rules i care about

};
