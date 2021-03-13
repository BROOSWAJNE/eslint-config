module.exports = {

	parser: '@typescript-eslint/parser',
	plugins: [ '@typescript-eslint' ],
	extends: [
		'./index.js',
		'plugin:@typescript-eslint/recommended',
	],

	overrides: [ {
		files: [ '*.test.ts' ],
		env: { mocha: true },
	} ],

};
