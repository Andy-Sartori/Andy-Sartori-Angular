(function() {
    'use strict';

    angular
        .module('andysartori')
        .controller('FoodEntrepreneurshipCtrl', FoodEntrepreneurshipCtrl);

    FoodEntrepreneurshipCtrl.$inject = ['$rootScope', '$scope', '$state'];

    function FoodEntrepreneurshipCtrl($rootScope, $scope, $state) {
    	$scope.$state = $state;
	}
})();
