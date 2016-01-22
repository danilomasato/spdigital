var app = angular.module('app', ['ngRoute', 'ngResource','app.services']);

app.config(function ($routeProvider) {

	$routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "views/home.html"
    });
 
    $routeProvider.when("/media-lists", {
        controller: "mediaListsController",
        templateUrl: "views/media-lists.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "views/login.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
 
});