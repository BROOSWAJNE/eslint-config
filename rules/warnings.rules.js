// warnings: used for things which sometimes can't be worked around / get in
//           the way of writing the code, but should really ideally be looked
//           at and refactored in the long term

// arbitrarily chosen numbers for the refactoring warnings
const MAX_COMPLEXITY = 50;
const MAX_DEPTH = 5;
const MAX_LENGTH = 100;
const MAX_LINES = 1000;
const MAX_LINES_PER_FUNC = 100;
const MAX_NESTED_CALLBACKS = 3;
const MAX_PARAMS = 3;
const MAX_STATEMENTS = 20;
const MAX_STATEMENTS_PER_LINE = 4;

module.exports = {

	'complexity': [ 'warn', MAX_COMPLEXITY ],
	'func-names': [ 'warn', 'always' ],
	'max-depth': [ 'warn', MAX_DEPTH ],
	'max-len': [ 'warn', { 'code': MAX_LENGTH } ],
	'max-lines': [ 'warn', MAX_LINES ],
	'max-lines-per-function': [ 'warn', MAX_LINES_PER_FUNC ],
	'max-nested-callbacks': [ 'warn', MAX_NESTED_CALLBACKS ],
	'max-params': [ 'warn', MAX_PARAMS ],
	'max-statements': [ 'warn', MAX_STATEMENTS ],
	'max-statements-per-line': [ 'warn', { 'max': MAX_STATEMENTS_PER_LINE } ],
	'no-magic-numbers': [ 'warn', {
		'ignore': [ -1, 0, 1, 2 ],
	} ],

};
