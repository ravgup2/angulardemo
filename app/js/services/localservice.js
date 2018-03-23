app.factory('localStorage', ['$window' ,function($window) {
  	var localStorage = $window.localStorage;
	
	var _getMessage = function (userId) {
		var mesgs = [];
		if(localStorage.getItem(userId)){
			mesgs = JSON.parse(localStorage.getItem(userId));
		}
		return mesgs;
	};

	var _setMessage = function (message) {
		var mesgs = [];
		var oldMsg = _getMessage(message.userId);

		mesgs.push(message);
		if(oldMsg){
			for (var i = 0; i < oldMsg.length; i++) {
				mesgs.push(oldMsg[i]);
			}
		}

		mesgs = JSON.stringify(mesgs);
		localStorage.setItem(message.userId,mesgs);
	};

	return {
		getMessage: _getMessage,
		setMessage: _setMessage,
	}

}]);