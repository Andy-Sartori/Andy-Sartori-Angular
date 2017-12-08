(function() {
    'use strict';

    angular
        .module('andysartori')
        .controller('BusinessMentoringCtrl', BusinessMentoringCtrl);

    BusinessMentoringCtrl.$inject = ['$rootScope', '$scope', '$state'];

    function BusinessMentoringCtrl($rootScope, $scope, $state) {
    	$scope.$state = $state;
	}
})();
