module.exports = {
	'import/default': 'error',
	'import/export': 'error',
	'import/extensions': [ 'error', 'ignorePackages' ],
	'import/first': 'error',
	'import/named': 'error',
	'import/no-default-export': 'error',
	'import/no-duplicates': 'error',
	'import/no-named-as-default': 'error',
	'import/no-namespace': 'error',
	'import/no-unused-modules': 'error',
	'import/order': [ 'error', {
		'groups': [ 'builtin', 'external', 'parent', 'sibling', 'index' ],
		'newlines-between': 'always',
	} ],
};
