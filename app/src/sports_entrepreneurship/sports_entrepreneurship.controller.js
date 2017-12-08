(function() {
    'use strict';

    angular
        .module('andysartori')
        .controller('SportsEntrepreneurshipCtrl', SportsEntrepreneurshipCtrl);

    SportsEntrepreneurshipCtrl.$inject = ['$rootScope', '$scope', '$state'];

    function SportsEntrepreneurshipCtrl($rootScope, $scope, $state) {
    	$scope.$state = $state;
	}
})();
