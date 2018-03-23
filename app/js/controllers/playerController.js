app.controller('playerCtrl', ['$scope','$rootScope','players','teams', function($scope,$rootScope, players,teams){
	$scope.players = players.list();
	$rootScope.players = $scope.players;
	$scope.teams = teams.query();
}]);