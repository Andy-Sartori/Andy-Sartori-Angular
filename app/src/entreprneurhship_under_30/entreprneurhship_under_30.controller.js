(function() {
    'use strict';

    angular
        .module('andysartori')
        .controller('EntreprneurhshipUnder30Ctrl', EntreprneurhshipUnder30Ctrl);

    EntreprneurhshipUnder30Ctrl.$inject = ['$rootScope', '$scope', '$state'];

    function EntreprneurhshipUnder30Ctrl($rootScope, $scope, $state) {
    	$scope.$state = $state;
	}
})();