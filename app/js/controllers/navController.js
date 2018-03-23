app.controller('navCtrl', ['$scope','$location', function($scope,$location){
	$scope.isActive = function (url) {
		return url === $location.path();
	}
}]);