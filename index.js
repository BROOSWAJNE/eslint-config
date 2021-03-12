// arbitrarily chosen numbers for the refactoring warnings
const MAX_COMPLEXITY = 50;
const MAX_DEPTH = 5;
const MAX_LENGTH = 100;
const MAX_LINES = 1000;
const MAX_LINES_PER_FUNC = 100;
const MAX_NESTED_CALLBACKS = 3;
const MAX_PARAMS = 3;
const MAX_STATEMENTS = 20;
const MAX_STATEMENTS_PER_LINE = 4;

module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	extends: [ 'eslint:recommended' ],
	plugins: [ 'import' ],

	overrides: [ {
		files: [ '*.test.js' ],
		env: { mocha: true },
	}, {
		files: [ 'src/**/*' ],
		env: { browser: true },
	}, {
		files: [ '*.script.js' ],
		rules: { 'no-console': 'off' },
	} ],

	rules: {

		// errors

		'accessor-pairs': [ 'error', {
			'enforceForClassMembers': true,
		} ],
		'array-bracket-newline': [ 'error', 'consistent' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'array-callback-return': 'error',
		'arrow-body-style': [ 'error', 'as-needed' ],
		'arrow-parens': [ 'error', 'always' ],
		'arrow-spacing': 'error',
		'block-spacing': [ 'error', 'always' ],
		'brace-style': [ 'error', '1tbs', {
			'allowSingleLine': true,
		} ],
		'camelcase': 'error',
		'class-methods-use-this': 'error',
		'comma-dangle': [ 'error', 'always-multiline' ],
		'comma-style': [ 'error', 'last' ],
		'comma-spacing': [ 'error' ],
		'computed-property-spacing': [ 'error', 'never', {
			'enforceForClassMembers': true,
		} ],
		'consistent-return': [ 'error', {
			'treatUndefinedAsUnspecified': true,
		} ],
		'curly': [ 'error', 'multi' ],
		'default-case': 'error',
		'default-case-last': 'error',
		'default-param-last': 'error',
		'dot-location': [ 'error', 'property' ],
		'eol-last': [ 'error', 'always' ],
		'eqeqeq': [ 'error', 'always', {
			'null': 'ignore',
		} ],
		'func-call-spacing': [ 'error', 'never' ],
		'func-style': [ 'error', 'declaration', {
			'allowArrowFunctions': true,
		} ],
		'function-call-argument-newline': [ 'error', 'consistent' ],
		'function-paren-newline': [ 'error', 'multiline' ],
		'generator-star-spacing': [ 'error', 'after' ],
		'grouped-accessor-pairs': 'error',
		'handle-callback-err': 'error',
		'implicit-arrow-linebreak': [ 'error', 'beside' ],
		'indent': [ 'error', 'tab', {
			'flatTernaryExpressions': true,
		} ],
		'init-declarations': 'error',
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'linebreak-style': [ 'error', 'unix' ],
		'lines-between-class-members': [ 'error', 'always' ],
		'multiline-ternary': [ 'error', 'always-multiline' ],
		'new-cap': 'error',
		'new-parens': [ 'error', 'always' ],
		'no-alert': 'error',
		'no-array-constructor': 'error',
		'no-caller': 'error',
		'no-cond-assign': [ 'error', 'except-parens' ],
		'no-console': 'error',
		'no-duplicate-imports': 'error',
		'no-else-return': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-floating-decimal': 'error',
		'no-implied-eval': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-loss-of-precision': 'error',
		'no-mixed-operators': 'error',
		'no-multi-assign': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-octal-escape': 'error',
		'no-path-concat': 'error',
		'no-promise-executor-return': 'error',
		'no-proto': 'error',
		'no-return-assign': [ 'error', 'except-parens' ],
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-compare': 'error',
		'no-template-curly-in-string': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-optional-chaining': 'error',
		'no-unused-expressions': [ 'error', {
			'allowTaggedTemplates': true,
		} ],
		'no-unused-vars': [ 'error', {
			'args': 'none',
			'ignoreRestSiblings': true,
		} ],
		'no-useless-backreference': 'error',
		'no-useless-call': 'error',
		'no-useless-computed-key': [ 'error', {
			'enforceForClassMembers': true,
		} ],
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': [ 'error', 'beside' ],
		'object-curly-spacing': [ 'error', 'always' ],
		'object-curly-newline': [ 'error', {
			'consistent': true,
		} ],
		'object-property-newline': [ 'error', {
			'allowAllPropertiesOnSameLine': true,
		} ],
		'object-shorthand': [ 'error', 'consistent' ],
		'one-var': [ 'error', 'never' ],
		'operator-linebreak': [ 'error', 'before' ],
		'prefer-const': 'error',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-template': 'error',
		'quote-props': [ 'error', 'consistent' ],
		'quotes': [ 'error', 'single' ],
		'radix': 'error',
		'rest-spread-spacing': [ 'error', 'never' ],
		'require-atomic-updates': 'error',
		'semi': [ 'error', 'always' ],
		'semi-spacing': 'error',
		'semi-style': [ 'error', 'last' ],
		'sort-imports': [ 'error', {
			'memberSyntaxSortOrder': [ 'none', 'multiple', 'single', 'all' ],
			'allowSeparatedGroups': true,
		} ],
		'space-before-blocks': 'error',
		'space-before-function-paren': [ 'error', {
			'anonymous': 'never',
			'named': 'never',
			'asyncArrow': 'always',
		} ],
		'space-in-parens': [ 'error', 'never', {
			'exceptions': [ 'empty' ],
		} ],
		'space-infix-ops': 'error',
		'space-unary-ops': [ 'error', {
			'words': true,
			'nonwords': false,
		} ],
		'spaced-comment': 'error',
		'switch-colon-spacing': [ 'error', {
			'after': true,
			'before': false,
		} ],
		'symbol-description': 'error',
		'template-curly-spacing': [ 'error', 'never' ],
		'template-tag-spacing': [ 'error', 'never' ],
		'use-isnan': [ 'error', {
			'enforceForSwitchCase': true,
			'enforceForIndexOf': true,
		} ],
		'valid-typeof': [ 'error', {
			'requireStringLiterals': true,
		} ],
		'wrap-iife': [ 'error', 'inside', {
			'functionPrototypeMethods': true,
		} ],
		'yield-star-spacing': 'error',
		'yoda': [ 'error', 'never', {
			'exceptRange': true,
		} ],

		// warnings: used for things which sometimes can't be worked around / get in
		//           the way of writing the code, but should really ideally be looked
		//           at and refactored in the long term

		'complexity': [ 'warn', MAX_COMPLEXITY ],
		'func-names': [ 'warn', 'always' ],
		'max-depth': [ 'warn', MAX_DEPTH ],
		'max-len': [ 'warn', { 'code': MAX_LENGTH } ],
		'max-lines': [ 'warn', MAX_LINES ],
		'max-lines-per-function': [ 'warn', MAX_LINES_PER_FUNC ],
		'max-nested-callbacks': [ 'warn', MAX_NESTED_CALLBACKS ],
		'max-params': [ 'warn', MAX_PARAMS ],
		'max-statements': [ 'warn', MAX_STATEMENTS ],
		'max-statements-per-line': [ 'warn', { 'max': MAX_STATEMENTS_PER_LINE } ],
		'no-magic-numbers': 'warn',

	},
};
