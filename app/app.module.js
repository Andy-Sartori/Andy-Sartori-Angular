(function () {
    'use strict';

    angular.module('andysartori', [
        'ui.router',
        'ngAnimate',
        'ngMaterial',
        'ngVidBg',
        'pc035860.scrollWatch',
        'slickCarousel'
    ])

    .config(function($locationProvider, $provide, $stateProvider, $mdDateLocaleProvider){
        // $locationProvider.html5Mode(true);
    })
    .run(function ($rootScope, $location, $state) {
    });
})();

