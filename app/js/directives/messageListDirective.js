app.directive("messageList", function(){
	return {
		restrict: "AE",
		scope: {
			msgs:'=msgs'
		},
		templateUrl: "templates/messages.tpl.html"
	}
})