var demoApp = angular.module('demoApp', [ ])

demoApp.config(function($routeProvider){
	//routeProvider is a built in Angular object that is empty by default [similar in nature to $scope]
	$routeProvider
		when('/',
			{
				controller: 'SimpleController',
				templateUrl: 'View1.html'
			})
		.when('/partial2',
			{
				controller: 'AnotherController', //could be the same controller as above or different
				templateUrl: 'View2.html'
			})
		.otherwise({ redirect to: '/' })
})