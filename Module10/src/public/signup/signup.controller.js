(function () {
  "use strict";
  
  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['allMenuItems'];  
  function SignUpController(allMenuItems) {
    var $ctrl = this;
    var allMenuItems = allMenuItems.menu_items.map(x => x.short_name.toUpperCase());
    
    $ctrl.submit = function () {
      $ctrl.completed = true;
    };

    $ctrl.dishExists = function (value) {
      return allMenuItems.includes(value.toUpperCase());
    }
  }
  
  })();
  