APP.controller('teamsController', function ($scope) {
	

	$scope.adding = false;
	$scope.currentTop = 0;
	$scope.currentLeft = 0;
	$scope.btnCurrentTop = 0;
	$scope.btnCurrentLeft = 0;
	$scope.currentButton;

	$scope.availableTeams = [
		{name: 'Arizona', top: '', left: '', rank: 1},
		{name: 'Pittsburgh', top: '', left: '', rank: 2},
		{name: 'Creighton', top: '', left: '', rank: 3},
		{name: 'Syracuse', top: '', left: '', rank: 4},
		{name: 'Louisville', top: '', left: '', rank: 5},
		{name: 'Iowa', top: '', left: '', rank: 6},
		{name: 'Wichita St', top: '', left: '', rank: 7},
		{name: 'Michigan St', top: '', left: '', rank: 8},
		{name: 'Kansas', top: '', left: '', rank: 9},
		{name: 'Michigan', top: '', left: '', rank: 10},
		{name: 'Oklahoma St', top: '', left: '', rank: 11},
		{name: 'Duke', top: '', left: '', rank: 12},
		{name: 'Virginia', top: '', left: '', rank: 13},
		{name: 'Villanova', top: '', left: '', rank: 14},
		{name: 'Wisconson', top: '', left: '', rank: 15},
		{name: 'Kentucky', top: '', left: '', rank: 16},
		{name: 'Florida', top: '', left: '', rank: 17},
		{name: 'Ohio St', top: '', left: '', rank: 18},
		{name: 'San Diego St', top: '', left: '', rank: 19},
		{name: 'Iowa St', top: '', left: '', rank: 20},
	]

	$scope.selectedTeams = [];

	$scope.selectTeam = function(team) {
		if ($scope.selectingMode) {
			$scope.availableTeams.splice($scope.availableTeams.indexOf(team), 1);
			team.top = $scope.currentTop;
			team.left = $scope.currentLeft;
			$scope.selectedTeams.push(team);
			$scope.buttons.splice($scope.buttons.indexOf($scope.currentButton), 1);
			$scope.adding = false;
			$scope.selectingMode = false;
		}
	}

	$scope.unselectTeam = function(team) {
		$scope.selectedTeams.splice($scope.selectedTeams.indexOf(team), 1);
		$scope.btnCurrentTop = team.top;
		$scope.btnCurrentLeft = team.left;
		var button = {left: $scope.btnCurrentLeft, top: $scope.btnCurrentTop};
		$scope.buttons.push(button);
		$scope.availableTeams.splice(team.rank-1, 0, team);
		// $scope.adding = false;
		// $scope.selectingMode = false;
	}

	$scope.beginSelecting = function(button) {
		if ($scope.selectingMode) {
			$scope.selectingMode = false;
		}
		else {
			$scope.selectingMode = true;
			$scope.currentButton = button;
			$scope.currentTop = button.top;
			$scope.currentLeft = button.left;
		}
	}

	$scope.clear = function() {
		$scope.search = '';
	}



	$scope.firstRoundGames = [

		{x1: 0, x2: 160, y1: 170, y2: 130, x3: 0, x4: 160, y3: 270, y4: 230},
		{x1: 0, x2: 160, y1: 370, y2: 330, x3: 0, x4: 160, y3: 470, y4: 430},
		{x1: 0, x2: 160, y1: 570, y2: 530, x3: 0, x4: 160, y3: 670, y4: 630},
		{x1: 0, x2: 160, y1: 770, y2: 730, x3: 0, x4: 160, y3: 870, y4: 830}
		
	]

	$scope.connectPoints = [
		{pt1: 200, pt2: 400},
		{pt1: 600, pt2: 800},
	]
	
	$scope.buttons = [
		{left:'545px', top:'32px'},{left:'545px', top:'72px'},
		{left:'545px', top:'132px'},{left:'545px', top:'172px'},
		{left:'545px', top:'232px'},{left:'545px', top:'272px'},
		{left:'545px', top:'332px'},{left:'545px', top:'372px'},
		{left:'545px', top:'432px'},{left:'545px', top:'472px'},
		{left:'545px', top:'532px'},{left:'545px', top:'572px'},
		{left:'545px', top:'632px'},{left:'545px', top:'672px'},
		{left:'545px', top:'732px'},{left:'545px', top:'772px'},
	]




});
