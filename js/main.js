(function () {
    'use strict';

    angular.module('main', []);

    /*
     * demo controller.
     */
    angular.module('main')
    .controller('demoController', ['$scope', function ($scope) {
        $scope.title = 'Demystifying AngularJS';
    }]);
})();