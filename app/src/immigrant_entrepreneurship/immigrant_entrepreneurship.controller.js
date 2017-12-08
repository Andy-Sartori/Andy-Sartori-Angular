(function() {
    'use strict';

    angular
        .module('andysartori')
        .controller('ImmigrantEntrepreneurshipCtrl', ImmigrantEntrepreneurshipCtrl);

    ImmigrantEntrepreneurshipCtrl.$inject = ['$rootScope', '$scope', '$state'];

    function ImmigrantEntrepreneurshipCtrl($rootScope, $scope, $state) {
    	$scope.$state = $state;
	}
})();
