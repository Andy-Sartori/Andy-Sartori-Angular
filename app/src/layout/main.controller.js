(function() {
    'use strict';

    angular
        .module('andysartori')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$rootScope', '$scope', '$state','$mdSidenav'];

    function MainCtrl($rootScope, $scope, $state, $mdSidenav) {
        $scope.selectedTab = $state.current.name;
        $scope.openMenu = function(ev) {
			$mdSidenav('menu').toggle();
		};
    }
})();