(function () {
  "use strict";
  
  angular.module('public')
  .controller('MyInfoController', MyInfoController);
  
  function MyInfoController() {
    var ctrl = this;
    
    ctrl.submit = function () {
      ctrl.completed = true;
    };
  }
  
  })();
  