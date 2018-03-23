app.controller('todoCtrl', ['$scope', function($scope){
	$scope.newTask = '';
	$scope.tasks = [];
	$scope.addTodo = function () {
		$scope.tasks.push({name: $scope.newTask});
		$scope.newTask = '';
	};

	$scope.editItem = function (task) {
		task.editing = true;
	};

	$scope.saveTask = function (task) {
		task.editing = false;
	}

	$scope.deleteItem = function (index) {
		$scope.tasks.splice(index,1);
	}
}]);