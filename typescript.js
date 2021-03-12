module.exports = {
	extends: [ './index.js' ],
	parser: '@typescript-eslint/parser',
	plugins: [ '@typescript-eslint' ],

	overrides: [ {
		files: [ '*.test.ts' ],
		env: { mocha: true },
	} ],
	// TODO: typescript-specific rules
};
