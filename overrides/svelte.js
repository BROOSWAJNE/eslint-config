const { FILENAME_PATTERN } = require('../shared/constants.js');

/** Overrides for a svelte environment. */
module.exports = {

	plugins: [ 'svelte3' ],
	processor: 'svelte3/svelte3',

	extends: [ './browser.js' ],
	rules: {
		'filenames/match-regex': [ 'error', [
			// allow PascalCase for svelte components (requires at least one lowercase char)
			/^[A-Z]+[a-z]+[A-Za-z]+\.svelte$/.source,
			// otherwise just standard filename pattern
			FILENAME_PATTERN,
		].join('|') ],

		// doesn't currently work correctly with svelte
		'import/first': 'off',
	},

};
