/**
 * Created by TUNE on 2017.06.16..
 */
var reloaded = angular.module("reloaded", []);
reloaded.controller("hello", ['$scope', function($scope) {
    $scope.name = "Tune";
}]);

