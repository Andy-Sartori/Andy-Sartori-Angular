(function() {
    'use strict';

    angular
        .module('andysartori')
        .controller('YoungEntrepreneurshipCtrl', YoungEntrepreneurshipCtrl);

    YoungEntrepreneurshipCtrl.$inject = ['$rootScope', '$scope', '$state'];

    function YoungEntrepreneurshipCtrl($rootScope, $scope, $state) {
    	$scope.$state = $state;
	}
})();
