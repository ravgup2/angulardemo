app.factory('players', function($rootScope,$timeout) {
  var items = [{
				"name": "Saurav Ganguly",
				"matches": 131,
				"team": "india",
				"salary": 6000000,
				"wordcup": "no"
			}, {
				"name": "Lasith Malinga",
				"matches": 644,
				"team": "srilanka",
				"salary": 1905000,
				"wordcup": "yes"
			}, {
				"name": "Steve Smith",
				"matches": 215,
				"team": "australia",
				"salary": 3350000,
				"wordcup": "yes"
			}, {
				"name": "Sachin Tendulkar",
				"matches": 234,
				"team": "india",
				"salary": 2800000,
				"wordcup": "no"
			}, {
				"name": "Shane Watson",
				"matches": 654,
				"team": "australia",
				"salary": 5680500,
				"wordcup": "yes"
			}, {
				"name": "Marvan Atapattu",
				"matches": 432,
				"team": "srilanka",
				"salary": 5330500,
				"wordcup": "yes"
			}, {
				"name": "David Warner",
				"matches": 111,
				"team": "australia",
				"salary": 2560000,
				"wordcup": "no"
			}, {
				"name": "Kumar Sangakkara",
				"matches": 553,
				"team": "srilanka",
				"salary": 3600000,
				"wordcup": "yes"
			}, {
				"name": "Virat Kohli",
				"matches": 245,
				"team": "india",
				"salary": 3670000,
				"wordcup": "yes"
			}];
	var playerService = {};
	playerService.list = function() {
	    return items;
	};

	return playerService;
});