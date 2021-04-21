module.exports = {

	extends: [ './index.js' ],
	overrides: [ {
		files: [ '*.rules.js' ],
		rules: { 'sort-keys': 'error' },
	} ],

};
