(function () {
  "use strict";
  
  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['allMenuItems'];  
  function SignUpController(allMenuItems) {
    var $ctrl = this;
    $ctrl.allMenuItems = allMenuItems.menu_items.map(x => x.short_name);
    
    $ctrl.submit = function () {
      ctrl.completed = true;
    };

    $ctrl.dishExists = function (value) {
      return $ctrl.allMenuItems.includes(value);
    }
  }
  
  })();
  