var app = angular.module('app', ['ngRoute', 'angularUtils.directives.dirPagination', 'duScroll'])
	.config(function($routeProvider, $locationProvider) {
		// Routes
		$routeProvider
			.when("/", {
				templateUrl: "/home/view.html",
				controller: "homeController"
			})
		// Required for ngRoute
		$locationProvider.html5Mode(true)
	})
	.config(function(paginationTemplateProvider) {
		// Custom pagination template for angularUtils pagination
		paginationTemplateProvider.setPath('/shared/pagination.html');
	})
