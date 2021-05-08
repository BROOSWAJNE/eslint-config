module.exports = {

	extends: [ './index.js' ],
	env: {
		browser: true,
		node: false,
	},

	rules: { 'import/no-nodejs-modules': 'error' },

};
