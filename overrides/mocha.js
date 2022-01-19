/** Overrides for a mocha testing environment. */
module.exports = {

	env: { mocha: true },
	plugins: [ "mocha" ],
	extends: [ "plugin:mocha/recommended" ],

	rules: {
		"mocha/no-hooks": "error",
		"mocha/valid-test-description": "error",

		// Warnings

		"mocha/max-top-level-suites": "warn",
		"mocha/no-exports": "warn",
	},

};
