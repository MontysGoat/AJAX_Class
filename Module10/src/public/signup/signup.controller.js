(function () {
  "use strict";
  
  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['allMenuItems'];  
  function SignUpController(allMenuItems) {
    var $ctrl = this;
    $ctrl.allMenuItems = allMenuItems;
    
    $ctrl.submit = function () {
      ctrl.completed = true;
    };
  }
  
  })();
  