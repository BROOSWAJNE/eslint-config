const { FILENAME_REGEX } = require('../shared/constants.js');

/** Overrides for a svelte environment. */
module.exports = {

	plugins: [ 'svelte3' ],
	processor: 'svelte3/svelte3',

	extends: [ './browser.js' ],
	rules: {
		'filename-rules/match': [ 'error', new RegExp([
			// allow PascalCase for svelte components (requiring at least one lowercase char)
			/^[A-Z]+[a-z]+[A-Za-z]+\.svelte$/.source,
			// but also allows standard kebab-case
			FILENAME_REGEX.source,
		].join('|')) ],

		// doesn't currently work correctly with svelte
		'import/first': 'off',
		// needed for props
		'init-declarations': 'off',
		'@typescript-eslint/init-declarations': 'off',
	},

};
