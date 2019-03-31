(function () {
    'use strict';
    angular.module('myPortfolio')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$location'];
    function MainController($scope, $location) {
        $scope.inputSearch = 'inputSearch';
        $scope.hireMe = function () {
            console.log('hello here');
            $location.path('/contact');
        };
        $scope.showCV = function () {
            console.log('CV here');
            $location.path('/projects');
        }
    }
})();