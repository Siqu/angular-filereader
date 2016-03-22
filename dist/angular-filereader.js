(function() {
	'use strict';

	angular
		.module('ngFileReader', []);
})();
(function() {
	'use strict';

	/**
	 * FilerReader factory.
	 * Wraps the window FileReader functions
	 *
	 * @param {Object} $window
	 * @returns {{}}
	 * @constructor
	 */
	function FileReader($window) {

		return {};
	}

	// angular dependencies for factory
	FileReader.$inject = ['$window'];

	angular
		.module('ngFileReader')
		.factory('FileReader', FileReader);
})();