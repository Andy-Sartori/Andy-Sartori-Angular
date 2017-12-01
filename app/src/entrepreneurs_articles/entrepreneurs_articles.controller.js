(function() {
    'use strict';

    angular
        .module('andysartori')
        .controller('EntrepreneursArticlesCtrl', EntrepreneursArticlesCtrl);

    EntrepreneursArticlesCtrl.$inject = ['$rootScope', '$scope', '$state'];

    function EntrepreneursArticlesCtrl($rootScope, $scope, $state) {
    	$scope.$state = $state;
	}
})();