app.directive("composeForm", function(){
	return {
		restrict: "AE",
		templateUrl: "templates/compose-form.tpl.html",
		scope:{
			compose: '=',
			send: '&',
			id: '='
		},
		link: function(scope, ele, attr){
			scope.sendMessage = function () {
				var message = {
					to: scope.to,
					subject: scope.subject,
					body: scope.body,
					userId: scope.id
				};
				scope.send({message:message})
			};

			scope.cancel = function () {
				scope.compose = false;
			}
		}
	}
})