const base = require('./eslint.js');

const disables = {
	// now redundant as this is already checked by typescript
	'consistent-return': 'off',
};

/** See https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules */
const replacements = { };
for (const rule of [
	'brace-style',
	'comma-dangle',
	'comma-spacing',
	'default-param-last',
	// 'dot-notation', // TODO: add in full TS config
	'func-call-spacing',
	'indent',
	'init-declarations',
	'keyword-spacing',
	'lines-between-class-members',
	'no-array-constructor',
	'no-dupe-class-members',
	'no-duplicate-imports',
	'no-empty-function',
	'no-extra-parens',
	'no-extra-semi',
	// 'no-implied-eval', // TODO: add in full TS config
	'no-invalid-this',
	'no-loop-func',
	'no-loss-of-precision',
	'no-magic-numbers',
	'no-redeclare',
	'no-shadow',
	// 'no-throw-literal', // TODO: add in full TS config
	'no-unused-expressions',
	'no-unused-vars',
	'no-use-before-define',
	'no-useless-constructor',
	'object-curly-spacing',
	'quotes',
	// 'require-await', // TODO: add in full TS config
	// 'return-await', // TODO: add in full TS config
	'semi',
	'space-before-function-paren',
	'space-infix-ops',
]) {
	// only replace the rule if it's actually specified in the base config
	const isWanted = rule in base;
	if (!isWanted) continue;
	// turn off the original rule, and add its replacement instead
	Object.assign(replacements, {
		[ rule ]: 'off',
		// use the same config as the base config
		[ `@typescript-eslint/${rule}` ]: base[ rule ],
	});
}

const warnings = {

	'@typescript-eslint/no-magic-numbers': [ 'warn', {
		...base[ 'no-magic-numbers' ][ 1 ],
		'ignoreEnums': true,
		'ignoreNumericLiteralTypes': true,
	} ],
	'@typescript-eslint/prefer-enum-initializers': 'warn',

};

const errors = {

	'@typescript-eslint/array-type': [ 'error', {
		'default': 'array-simple',
	} ],
	'@typescript-eslint/class-literal-property-style': [ 'error', 'fields' ],
	'@typescript-eslint/consistent-indexed-object-style': [ 'error', 'index-signature' ],
	'@typescript-eslint/consistent-type-assertions': [ 'error', {
		// TODO: should this be `never`, and therefore require an explicit eslint-disable which
		//       explains the reason for the assertion being necessary?
		'assertionStyle': 'as',
		'objectLiteralTypeAssertions': 'allow-as-parameter',
	} ],
	'@typescript-eslint/consistent-type-definitions': [ 'error', 'interface' ],
	'@typescript-eslint/consistent-type-imports': [ 'error', {
		'prefer': 'type-imports',
	} ],
	'@typescript-eslint/member-delimiter-style': 'error',
	'@typescript-eslint/member-ordering': 'error',
	'@typescript-eslint/method-signature-style': 'error',
	'@typescript-eslint/no-confusing-non-null-assertion': 'error',
	'@typescript-eslint/no-dynamic-delete': 'error',
	'@typescript-eslint/no-extraneous-class': 'error',
	'@typescript-eslint/no-implicit-any-catch': 'error',
	'@typescript-eslint/no-invalid-void-type': 'error',
	'@typescript-eslint/no-parameter-properties': 'error',
	'@typescript-eslint/no-require-imports': 'error',
	'@typescript-eslint/no-unnecessary-type-constraint': 'error',
	'@typescript-eslint/prefer-for-of': 'error',
	'@typescript-eslint/prefer-function-type': 'error',
	'@typescript-eslint/prefer-literal-enum-member': 'error',
	'@typescript-eslint/prefer-optional-chain': 'error',
	'@typescript-eslint/prefer-ts-expect-error': 'error',
	'@typescript-eslint/sort-type-union-intersection-members': 'error',
	'@typescript-eslint/triple-slash-reference': 'error',
	'@typescript-eslint/type-annotation-spacing': 'error',
	'@typescript-eslint/unified-signatures': 'error',

};

module.exports = {
	...disables,
	...replacements,
	...warnings,
	...errors,
};
