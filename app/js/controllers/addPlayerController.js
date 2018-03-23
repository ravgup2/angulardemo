app.controller('addPlayerCtrl', ['$scope','$rootScope','players','teams','$location','lodash', function($scope,$rootScope,players,teams,$location,_){
	$scope.players = players.list();
	$rootScope.players = $scope.players;
	$scope.teams = teams.query();
	$scope.team = $scope.teams[0];
	$scope.wordcup = 'yes';
	$scope.duplicate = false;
	
	$scope.add = function(item) {
		if(_.find($rootScope.players,{name: item.name})){
			$scope.duplicate = true;
		}
		else {
			$scope.duplicate = false;
			$rootScope.players.push(item); 
		    $location.path( "/player" );
		}
	};

}]);