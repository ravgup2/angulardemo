app.service('employees', function() {
  this.query = function () {
  	return [
			{
				name: 'Employee1',
				age:30,
				joiningDate: 1377500400000
			},
			{
				name: 'Employee2',
				age:29,
				joiningDate:1374044400000

			},
			{
				name: 'Employee3',
				age:28,
				joiningDate:1335942000000
			},
			{
				name: 'Employee4',
				age:27,
				joiningDate:1380524400000
			}
		];
  }
});