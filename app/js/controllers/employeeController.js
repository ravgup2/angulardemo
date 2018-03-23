app.controller('employeeCtrl', [ '$scope', 'employees', function($scope,employees){
	$scope.employees = employees.query();
	angular.forEach($scope.employees, function(item){
		item.joiningDateAsDate = new Date(item.joiningDate);
	})
	$scope.dateRange = "";
	
	$scope.toggleImp = function (emp) {
		emp.important = (emp.important) ? false : true;
	}

	$scope.search = function () {
		
	}
}]);