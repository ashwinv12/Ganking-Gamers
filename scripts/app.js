var APP = angular.module('APP', ['ngRoute']);

APP.config(function($routeProvider) {
	$routeProvider.
	when('/', {templateUrl: 'partials/home.html'}).
	when('/walkthroughs', {templateUrl: 'partials/walkthroughs.html'}).
	when('/gameplays', {templateUrl: 'partials/gameplays.html'}).
	when('/about', {templateUrl: 'partials/about.html'}).
	otherwise({redirectTo: '/'})
})