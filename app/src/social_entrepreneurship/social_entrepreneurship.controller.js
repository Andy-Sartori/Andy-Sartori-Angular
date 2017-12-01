(function() {
    'use strict';

    angular
        .module('andysartori')
        .controller('SocialEntrepreneurshipCtrl', SocialEntrepreneurshipCtrl);

    SocialEntrepreneurshipCtrl.$inject = ['$rootScope', '$scope', '$state'];

    function SocialEntrepreneurshipCtrl($rootScope, $scope, $state) {
    	$scope.$state = $state;
	}
})();