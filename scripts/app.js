var APP = angular.module('APP', ['ngRoute']);

APP.config(function($routeProvider) {
	$routeProvider.
	when('/', {templateUrl: 'partials/home.html'}).
	when('/walkthroughs', {
		templateUrl: 'partials/walkthroughs.html',
		controller: 'WalkthroughsController'
	}).
	when('/gameplays', {templateUrl: 'partials/gameplays.html'}).
	when('/gameplays', {templateUrl: 'partials/gameplays.html'}).
	when('/about', {templateUrl: 'partials/about.html'}).
	when('/qanda', {templateUrl: 'partials/qanda.html'}).
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
		{name: 'Faster Than Light', href:'/fasterthanlight'},
	]
})

APP.controller('DeadSpace2Ctrl', function($scope, $sce) {
	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	}

	$scope.gameName = 'Dead Space 2';
	$scope.description = 
		'Dead Space 2 is a survival/horror game where the protagonist Isaac Clark must use all of his skill and cunning in order to work his way through Titan Station and stop a second necromorph outbreak from consuming anymore than the station itself; all the well trying to stave off his maddened death from coming in contact from the mysterious marker.'
	$scope.background = 'deadspace2b.jpg';
	$scope.videos = [
		{name: 'Piano Cover 1', src: 'http://www.youtube.com/embed/tRMtPQCx-Xk'},
		{name: 'Piano Cover 2', src: 'http://www.youtube.com/embed/tRMtPQCx-Xk'},
		{name: 'Piano Cover 3', src: 'http://www.youtube.com/embed/tRMtPQCx-Xk'},
	]

})

APP.controller('DarkSoulsCtrl', function($scope, $sce) {
	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	}
	$scope.gameName = 'Dark Souls';
	$scope.background = 'darksouls.jpg';
	$scope.videos = [
		{name: 'Piano Cover 1', src: 'http://www.youtube.com/embed/tRMtPQCx-Xk'},
		{name: 'Piano Cover 2', src: 'http://www.youtube.com/embed/tRMtPQCx-Xk'},
		{name: 'Piano Cover 3', src: 'http://www.youtube.com/embed/tRMtPQCx-Xk'},
	]

})

APP.controller('OrcsMustDieCtrl', function($scope, $sce) {
	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	}
	$scope.gameName = 'Orcs Must Die';
	$scope.background = 'orcsmustdie.jpg';
	$scope.videos = [
		{name: 'Piano Cover 1', src: 'http://www.youtube.com/embed/tRMtPQCx-Xk'},
		{name: 'Piano Cover 2', src: 'http://www.youtube.com/embed/tRMtPQCx-Xk'},
		{name: 'Piano Cover 3', src: 'http://www.youtube.com/embed/tRMtPQCx-Xk'},
	]

})

APP.controller('FasterThanLightCtrl', function($scope, $sce) {
	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	}
	$scope.gameName = 'Faster Than Light';
	$scope.description = 
		'This is a rouge-like space game. You navigate through the hostile universe where literally everything wants to kill you. You must navigate to the end of the game, send the information to your fleet, and stop the rebels from taking over the universe. It is a game of being in constant crisis management mode as there are no safe places in this galaxy.'
	$scope.background = 'fasterthanlight.jpg';
	$scope.videos = [
		{name: 'Piano Cover 1', src: 'http://www.youtube.com/embed/tRMtPQCx-Xk'},
		{name: 'Piano Cover 2', src: 'http://www.youtube.com/embed/tRMtPQCx-Xk'},
		{name: 'Piano Cover 3', src: 'http://www.youtube.com/embed/tRMtPQCx-Xk'},
	]

})