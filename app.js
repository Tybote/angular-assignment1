(function () {
  'use strict';
  
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    var styles = {};
    styles.green = {
      "color" : "green",
      "border" : "solid 1px green",
    };
    styles.red = {
      "color" : "red",
      "border" : "solid 1px red",
    }

    $scope.displayMessage = function () {
      console.log("menu = " + $scope.menu);
      var msg = "Please enter data first";
      var nbItems = 0;
      if($scope.menu != undefined) {
        nbItems = $scope.menu.split(",")
                        .filter(function(item){
                          console.log("item = " + item);
                          return (item != "" );
                        })
                        .length;
        console.log("nbItems = " + nbItems);
        if(nbItems > 0 && nbItems <= 3) {
          msg = "Enjoy!";
        }
        else if (nbItems > 3) {
          msg = "Too much!";
        }
      }
      console.log("nbItems = " + nbItems);
      if(nbItems == 0){
        $scope.myStyle = styles.red;
      }
      else {
        $scope.myStyle = styles.green;
      }
      $scope.message = msg;
    };
  }
})();
