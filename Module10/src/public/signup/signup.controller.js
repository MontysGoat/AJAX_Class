(function () {
  "use strict";
  
  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['allMenuItems', '$scope'];  
  function SignUpController(allMenuItems, $scope) {
    var $ctrl = this;
    var allMenuItems = allMenuItems.menu_items.map(x => x.short_name.toUpperCase());
    
    $ctrl.submit = function () {
      ctrl.completed = true;
    };

    $scope.dishExists = function (value) {
      return allMenuItems.includes(value.toUpperCase());
    }
  }
  
  })();
  