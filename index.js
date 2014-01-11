var _ = require('lodash');


/**
 * sails-generate-generator
 * 
 * Usage:
 * `sails generate generator foo`
 * 
 * @type {Object}
 */
module.exports = {

	bootstrap: function (scope, cb) {
		_.defaults(scope, {
			moduleName: 'sails-generate-'+scope.args[0],
			author: 'A Node.js/Sails.js Contributor',
			year: (new Date()).getFullYear()
		});
		cb();
	},

	targets: {
		'.': {
			exec: function (scope, cb) {
				console.log('TODO: generate stuff starting @ `'+scope.relPath+'`...');
				cb();
			}
		}
	}
};