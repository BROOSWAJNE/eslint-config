const { FILENAME_PATTERN } = require('../shared/constants.js');

module.exports = {
	'filenames/match-regex': [ 'error', FILENAME_PATTERN ],
	'filenames/no-index': 'error',
};
