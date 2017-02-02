//parameter is actually 'Dependency Injection' that is built into Angular
function SimpleController($scope) {
	//when '$scope' is passed as parameter, Angular will create a 'scope' object
	//it is an empty object by default but is built by giving it properties
	//ng-model directives that add to the scope can be referenced here using $scope.[model property name]
	$scope.customers = [
		{name: 'Dana Kulp', city:'Lansdale'},
		{name: 'Jillian Muscatel', city:'Seattle'},
		{name: 'Danny Martin', city:'Spokane'},
		{name: 'Byran McNeilly', city:'Bothell'}
	];
}

//modular approach *DO IT THIS WAY!!*

var demoApp /*var name does not need to match string name*/ = angular.module('demoApp', [ ])

demoApp.controller('SimpleController', function($scope) { 	//Works to pass in a named function 
	$scope.customers = [									//or define an anonymous function like this
		{name: 'Dana Kulp', city:'Lansdale'},
		{name: 'Jillian Muscatel', city:'Seattle'},
		{name: 'Danny Martin', city:'Spokane'},
		{name: 'Bryan McNeilly', city:'Bothell'}
	];
})

//another modular approach for apps with multiple controllers

var demoApp = angular.module('demoApp', [ ])

var controllers = {}

controllers.SimpleController = function($scope) {
	$scope.customers = [
		{name: 'Dana Kulp', city:'Lansdale'},
		{name: 'Jillian Muscatel', city:'Seattle'},
		{name: 'Danny Martin', city:'Spokane'},
		{name: 'Bryan McNeilly', city:'Bothell'}
	]

	$scope.addCustomer = function() {
		$scope.customers.push({ name: $scope.newCustomer.name, city: $scope.newCustomer.city })
	}
}

controllers.AnotherController = function($scope) {
	//some functionality
}

demoApp.controller(controllers)