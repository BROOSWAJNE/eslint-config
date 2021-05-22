/** Overrides for a browser environment. */
module.exports = {

	env: {
		browser: true,
		node: false,
	},

	rules: { 'import/no-nodejs-modules': 'error' },

};
