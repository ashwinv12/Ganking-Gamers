APP.directive('menuBar', function () {
	return {
		restrict: 'E',
		templateUrl: 'menu.html',
		replace: true,
		controller: function($scope) {
			$scope.currentPageIndex = 0;

			$scope.menuItems = [
				{name: 'Home', icon: 'home'},
				{name: 'Walkthroughs'},
				{name: 'Gameplays'},
				{name: 'About'},
			]

			$scope.setCurrentPage = function(index) {
				$scope.currentPageIndex = index;
			}
		},
	}
})