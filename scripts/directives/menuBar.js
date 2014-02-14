APP.directive('menuBar', function () {
	return {
		restrict: 'E',
		templateUrl: 'menu.html',
		replace: true,
		controller: function($scope, $location) {
			$scope.currentPageIndex = -1;
			$scope.path = null;
			$scope.setPath = function(path) {
				$scope.currentPath = path;
			}
			$scope.getPath = function() {
				return $scope.path;
			}
			$scope.menuItems = [
				{name: 'Home', icon: 'home', href: 'home'},
				{name: "Let's Plays", icon: 'gamepad', href: 'walkthroughs'},
				{name: "Quicklooks/Commentaries", icon: 'laptop', href: 'gameplays'},
				{name: 'About', icon: 'info', href: 'about'},
			]

			$scope.setCurrentPage = function(index) {
				$scope.currentPageIndex = index;
			}
		},
	}
})