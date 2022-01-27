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

		// Disables

		// each describe() and it() gets counted as an extra level of callback
		// nesting, but we want to allow those
		"max-nested-callbacks": "off",
		// the exact number of something which we expect isn't magic
		"no-magic-numbers": "off",
		// a single describe() might be verrryyy long
		"max-lines-per-function": "off",
	},

};
