/** Overrides for standalone scripts. */
module.exports = {

	rules: {
		// no reason to disallow console usage in scripts
		"no-console": "off",
		// also nothing wrong with exiting the process if we're what's running
		"no-process-exit": "off",

		// don't allow any exports
		"import/no-default-export": "error",
		"import/no-named-export": "error",
	},

};
