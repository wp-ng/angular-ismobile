// @include ../node_modules/ismobilejs/src/isMobile.js

/**
 * angular-ismobile by Ronny Haase <ronhaase@gmail.com>
 *
 * Licensed under CC0 1.0 Universal (CC0 1.0)
 *
 * https://github.com/ronnyhaase/angular-ismobile
 */
(function () {
	'use strict';

	angular.module('ismobile', []);

	angular.module('ismobile').provider('isMobile', ['$windowProvider', function IsMobileProvider($windowProvider) {
		var _window = $windowProvider.$get();

		angular.extend(this, _window.isMobile);

		this.$get = [function isMobileFactory() {
			return angular.copy(_window.isMobile);
		}];
	}]);


    angular.module('ismobile').filter('isMobile', ['isMobile', function(isMobile) {

    	return function( device ) {

    		return isMobile[device];
        };
    }]);
})();
