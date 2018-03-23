app.config( function ($stateProvider) {
	$stateProvider
	.state('home', {
	url: "/",
	templateUrl: 'templates/home.tpl.html',
	controller: 'homeCtrl'
	})
	.state('todo', {
	url: "/todo",
	templateUrl: 'templates/todo.tpl.html',
	controller: 'todoCtrl'
	})
	.state('employee', {
	url: "/employee",
	templateUrl: 'templates/employee.tpl.html',
	controller: 'employeeCtrl'
	})
	.state('contact', {
	url: "/contact",
	templateUrl: 'templates/contact.tpl.html',
	controller: 'contactCtrl'
	})
	.state('player', {
	url: "/player",
	templateUrl: 'templates/players.tpl.html',
	controller: 'playerCtrl'
	})
	.state('addplayer', {
        url: '/add-player',
        templateUrl: 'templates/add-players.tpl.html',
		controller: 'addPlayerCtrl'
    })
    .state('Inbox', {
        url: '/inbox/:userId',
        templateUrl: 'templates/inbox.tpl.html',
		controller: 'inboxCtrl'
    })
    .state('Login', {
        url: '/login',
        templateUrl: 'templates/login.tpl.html',
		controller: 'inboxCtrl'
    })
});