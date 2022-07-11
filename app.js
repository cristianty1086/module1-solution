(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.content = "";
  $scope.message = "";
  $scope.color = "black";
  $scope.checkIfTooMuch = function() {
    if( $scope.content === "" ) {
      $scope.color = "red";
      $scope.message = "Please enter data first";
      return;
    }

    var list_food = $scope.content.split(",");
    list_food = list_food.filter(n => n.replace(' ','') != "");
    $scope.color = "green";
    if( list_food.length > 3 ) {
      $scope.message = "Too much!";
    } else {
      $scope.message = "Enjoy!";
    }
  };
}

})();
