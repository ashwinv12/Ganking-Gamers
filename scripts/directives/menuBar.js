APP.directive('menuBar', function () {
	return {
		restrict: 'E',
		templateUrl: 'menu.html',
		replace: true,
		controller: function($scope) {
			$scope.currentPageIndex = 0;

			$scope.menuItems = [
				{name: 'Home', icon: 'home', href: 'home'},
				{name: 'Walkthroughs', icon: 'hdd', href: 'walkthroughs'},
				{name: 'Gameplays', icon: 'gamepad', href: 'gameplays'},
				{name: 'About', icon: 'info', href: 'about'},
			]

			$scope.setCurrentPage = function(index) {
				$scope.currentPageIndex = index;
			}
		},
	}
})