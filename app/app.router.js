(function () {
    'use strict';
    angular
        .module('andysartori')
        .config(coreRoute);

    function coreRoute($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '',
                abstract: true,
                templateUrl: 'src/layout/main.html',
                controller: 'MainCtrl'
            }).state('app.home', {
                url: '/home',
                templateUrl: 'src/home/home.html',
                controller: 'HomeCtrl'
            }).state('app.famous-entrepreneurs', {
                url: '/famous-entrepreneurs',
                templateUrl: 'src/famous_entrepreneurs/famous_entrepreneurs.html',
                controller: 'FamousEntrepreneursCtrl'
            }).state('app.motivational-speakers', {
                url: '/motivational-speakers',
                templateUrl: 'src/motivational_speakers/motivational_speakers.html',
                controller: 'MotivationalSpeakersCtrl'
            }).state('app.social-entrepreneurship', {
                url: '/social-entrepreneurship',
                templateUrl: 'src/social_entrepreneurship/social_entrepreneurship.html',
                controller: 'SocialEntrepreneurshipCtrl'
            }).state('app.entrepreneurs-articles', {
                url: '/entrepreneurs-articles',
                templateUrl: 'src/entrepreneurs_articles/entrepreneurs_articles.html',
                controller: 'EntrepreneursArticlesCtrl'
            }).state('app.business-speaking', {
                url: '/business-speaking',
                templateUrl: 'src/business_speaking/business_speaking.html',
                controller: 'BusinessSpeakingCtrl'
            }).state('app.entreprneurhship-under-30', {
                url: '/entreprneurhship-under-30',
                templateUrl: 'src/entreprneurhship_under_30/entreprneurhship_under_30.html',
                controller: 'EntreprneurhshipUnder30Ctrl'
            })
        $urlRouterProvider.otherwise('/home');
    }
})();