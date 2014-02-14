var APP = angular.module('APP', ['ngRoute']);

APP.config(function($routeProvider) {
	$routeProvider.
	when('/', {templateUrl: 'partials/home.html'}).
	when('/walkthroughs', {
		templateUrl: 'partials/walkthroughs.html',
		controller: 'WalkthroughsController'
	}).
	when('/gameplays', {templateUrl: 'partials/gameplays.html'}).
	when('/about', {templateUrl: 'partials/about.html'}).
	when('/deadspace2', {
		templateUrl: 'partials/gamePage.html',
		controller: 'DeadSpace2Ctrl'
	}).
	when('/darksouls', {
		templateUrl: 'partials/gamePage.html',
		controller: 'DarkSoulsCtrl'
	}).
	when('/orcsmustdie', {
		templateUrl: 'partials/gamePage.html',
		controller: 'OrcsMustDieCtrl'
	}).
	when('/fasterthanlight', {
		templateUrl: 'partials/gamePage.html',
		controller: 'FasterThanLightCtrl'
	}).
	otherwise({redirectTo: '/'})
})

APP.controller('WalkthroughsController', function($scope, $sce) {

	$scope.games = [
		{name: 'Dead Space 2', href:'/deadspace2'},
		{name: 'Dark Souls', href:'/darksouls'},
		{name: 'Faster Than Light', href:'/fasterthanlight'},
		{name: 'Orcs Must Die', href:'/orcsmustdie'},
	]
})

APP.controller('DeadSpace2Ctrl', function($scope, $sce) {
	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	}

	$scope.gameName = 'Dead Space 2';
	$scope.background = 'deadspace2b.jpg';
	$scope.videos = [
		{name: 'Piano Cover 1', src: 'http://www.youtube.com/embed/Zl5aaakvzRs'},
		{name: 'Piano Cover 2', src: 'http://www.youtube.com/embed/zMUecIBgrHo'},
		{name: 'Piano Cover 3', src: 'http://www.youtube.com/embed/p_V9m7QWZPo'},
	]

})

APP.controller('DarkSoulsCtrl', function($scope, $sce) {
	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	}
	$scope.gameName = 'Dark Souls';
	$scope.background = 'darksouls.jpg';
	$scope.videos = [
		{name: 'Piano Cover 1', src: 'http://www.youtube.com/embed/Zl5aaakvzRs'},
		{name: 'Piano Cover 2', src: 'http://www.youtube.com/embed/zMUecIBgrHo'},
		{name: 'Piano Cover 3', src: 'http://www.youtube.com/embed/p_V9m7QWZPo'},
	]

})

APP.controller('OrcsMustDieCtrl', function($scope, $sce) {
	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	}
	$scope.gameName = 'Orcs Must Die';
	$scope.background = 'orcsmustdie.jpg';
	$scope.videos = [
		{name: 'Piano Cover 1', src: 'http://www.youtube.com/embed/Zl5aaakvzRs'},
		{name: 'Piano Cover 2', src: 'http://www.youtube.com/embed/zMUecIBgrHo'},
		{name: 'Piano Cover 3', src: 'http://www.youtube.com/embed/p_V9m7QWZPo'},
	]

})

APP.controller('FasterThanLightCtrl', function($scope, $sce) {
	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	}
	$scope.gameName = 'Faster Than Light';
	$scope.background = 'fasterthanlight.jpg';
	$scope.videos = [
		{name: 'Piano Cover 1', src: 'http://www.youtube.com/embed/Zl5aaakvzRs'},
		{name: 'Piano Cover 2', src: 'http://www.youtube.com/embed/zMUecIBgrHo'},
		{name: 'Piano Cover 3', src: 'http://www.youtube.com/embed/p_V9m7QWZPo'},
	]

})