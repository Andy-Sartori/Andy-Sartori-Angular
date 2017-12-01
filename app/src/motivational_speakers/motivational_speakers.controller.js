(function() {
    'use strict';

    angular
        .module('andysartori')
        .controller('MotivationalSpeakersCtrl', MotivationalSpeakersCtrl);

    MotivationalSpeakersCtrl.$inject = ['$rootScope', '$scope', '$state'];

    function MotivationalSpeakersCtrl($rootScope, $scope, $state) {
    	$scope.$state = $state;
	}
})();