(function() {
    'use strict';

    angular
        .module('andysartori')
        .controller('EntrepreneurshipStoryCtrl', EntrepreneurshipStoryCtrl);

    EntrepreneurshipStoryCtrl.$inject = ['$rootScope', '$scope', '$state'];

    function EntrepreneurshipStoryCtrl($rootScope, $scope, $state) {
    	$scope.$state = $state;
	}
})();
