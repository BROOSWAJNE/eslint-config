module.exports = {

	extends: [ "./index.js" ],
	overrides: [ {
		files: [ "*.rules.js" ],
		rules: { "sort-keys": "error" },
	} ],

	rules: { "import/no-commonjs": "off" },

};
