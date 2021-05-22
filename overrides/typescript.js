const rules = require('../rules/typescript.js');

// TODO: create a typescript-full config, with rules requiring type checking for ci
// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules

/** Overrides for a typescript environment. */
module.exports = {

	parser: '@typescript-eslint/parser',
	plugins: [ '@typescript-eslint' ],

	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
	],

	rules: rules,

};
