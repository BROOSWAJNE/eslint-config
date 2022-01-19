const ERRORS = {
	"eslint-comments/disable-enable-pair": [ "error", {
		"allowWholeFile": true,
	} ],
	"eslint-comments/no-aggregating-enable": "error",
	"eslint-comments/no-unlimited-disable": "error",
	"eslint-comments/require-description": "error",
};

const WARNINGS = {
	"eslint-comments/no-duplicate-disable": "warn",
	"eslint-comments/no-unused-enable": "warn",
};

module.exports = { ...ERRORS, ...WARNINGS };
