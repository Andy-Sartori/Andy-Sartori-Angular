(function() {
    'use strict';

    angular
        .module('andysartori')
        .controller('BusinessSpeakingCtrl', BusinessSpeakingCtrl);

    BusinessSpeakingCtrl.$inject = ['$rootScope', '$scope', '$state'];

    function BusinessSpeakingCtrl($rootScope, $scope, $state) {
    	$scope.$state = $state;
	}
})();