app.controller('inboxCtrl', ['$scope','$stateParams','localStorage', function($scope,$stateParams,localStorage){
	
	$scope.userId = $stateParams.userId || 101;
	$scope.messages = [];
	$scope.getMessage = function () {
		$scope.messages = localStorage.getMessage($scope.userId);
	};
	$scope.getMessage();

	$scope.compose = false;
	$scope.setMessage = function (message) {
		localStorage.setMessage(message);
		$scope.compose = false;
	};
	
}]);