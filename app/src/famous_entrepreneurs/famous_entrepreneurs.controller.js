(function() {
    'use strict';

    angular
        .module('andysartori')
        .controller('FamousEntrepreneursCtrl', FamousEntrepreneursCtrl);

    FamousEntrepreneursCtrl.$inject = ['$rootScope', '$scope', '$state'];

    function FamousEntrepreneursCtrl($rootScope, $scope, $state) {
    	$scope.$state = $state;
	}
})();