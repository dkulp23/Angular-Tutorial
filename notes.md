#JS Librarys for SPAs
-SammyJS
-historyJS
-requireJS
-AJAX => Q

#Directives => 'a way to teach HTML new tricks'
-Uses attributes, elements and comments
- 'ng-' signifies an angular directive
- 'ng-app' directive in html tag kicks off angular app
- 'ng-model' directive that adds a property with the given value to the memory or '$scope'
- 'ng-init' directive that allows you to declare a variable and give it values [an array]
- 'ng-repeat' directive that allows you to iterate over the array from the init using the `'instance' in [array]` syntax
- {{ 'data binding agent' | 'filter' }} angular allows you to filter the instances that are shown with built in methods
- 'ng-controller' directive to automatically tie in javascript controller objects can be placed inside any element tag
- 'ng-click' directive that acts as an event listener

#Angular follows MVC Paradigm
'The view doesn't have to know about the controller,
 and the controller definitely doesn't want to know about the view.'
-Angular uses the term Scope for the ViewModel (which is the glue between the View and the Controller)
	-View contains:
		1. Directives
		2. Filters
		3. Data Binding
	-Controller is the JavaScript object with the logic that drives the View
		-Controller controls what data will be bound into the View
	-$scope ties the controller to the view

# Define a Route => Route has Controller and View => Controller can load data from factories/services/etc.

#Modularity (modules)

	var demoApp = angular.module('demoApp', ['helperModule'])
	
	-Angular give you access to the angular object that you can easily create modules off of
	-the second argument is for any dependency modules (other JS files) needed for the one you're creating
		-similar to requireJS

#Routes

This is the 'glue' part between the view and the controller. This allows scope to be passed with appropiate data-binding and directives handling
	? Partials folder for segments of HTML ?


Validation => ?

## AngularJS.org Website - Navigate to 'Develop' and then 'API Reference' for documentation