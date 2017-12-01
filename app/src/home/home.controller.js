(function() {
    'use strict';

    angular
        .module('andysartori')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$rootScope', '$scope', '$state'];

    function HomeCtrl($rootScope, $scope, $state) {
    	$scope.$state = $state;
    	$scope.$state.scrollTo = 'top';
		$scope.resources = [
			'assets/video/AndySartoriHero.mp4'
		];
		$scope.poster = 'http://placehold.it/2000&text=you%20may%20want%20to%20have%20a%20poster';
		$scope.fullScreen = false;
		$scope.muted = true;
		$scope.zIndex = '22';
		$scope.playInfo = {};
		$scope.pausePlay = false;
		/*
			Slick Settings
		 */
		$scope.slickConfig = {
			enabled: true,
		    autoplay: true,
		    draggable: true,
		    autoplaySpeed: 3000,
		    slidesToScroll: 1,
		    slidesToShow: 3,
		    infinite: true,
		    dots: true,
		    method: {},
		    event: {
		        beforeChange: function (event, slick, currentSlide, nextSlide) {
		        },
		        afterChange: function (event, slick, currentSlide, nextSlide) {
		        }
		    }
		};
      	/*
      		Sharing Fab Settings
      	 */
      	$scope.isSharingOpen = false;
      	$scope.fab_direction = 'down';
      	/*
      		Responsive Settings
      	 */
      	$(window).on("resize.doResize", function (){
	      	$scope.$apply(function(){
	          	if(window.innerWidth >= 1268) {
	          		$scope.slickConfig.slidesToShow = 3;
	          		$scope.fab_direction = 'down';
	          	} else if(window.innerWidth >=678 ) {
	          		$scope.slickConfig.slidesToShow = 2;
	          		$scope.fab_direction = 'right';
	          	} else {
	          		$scope.slickConfig.slidesToShow = 1;
	          		$scope.fab_direction = 'right';
	          	}
	      	});
		});
		if(window.innerWidth >= 1268) {
      		$scope.slickConfig.slidesToShow = 3;
      		$scope.fab_direction = 'down';
      	} else if(window.innerWidth >=678 ) {
      		$scope.slickConfig.slidesToShow = 2;
      		$scope.fab_direction = 'right';
      	} else {
      		$scope.slickConfig.slidesToShow = 1;
      		$scope.fab_direction = 'right';
      	}
    }
})();