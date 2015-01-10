'use strict';
angular.module("Issue110.properties", []).controller("propertiesController", ['$scope', function($scope){
    var _privateCash = 0;
    $scope.cash = _privateCash;
}]);