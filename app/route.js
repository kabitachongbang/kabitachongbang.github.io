angular.module('myPortfolio', ['ngRoute']);

angular.module('myPortfolio').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/view/portfolio.html'
        })
        .when('/about', {
            templateUrl: 'app/view/about.html'
        })
        .when('/contact', {
            templateUrl: 'app/view/contact.html'
        })
        .when('/projects', {
            templateUrl: 'app/view/projects.html',
        })






});