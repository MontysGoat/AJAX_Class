(function () {
    "use strict";
    
    angular.module('common')
    .service('UsersService', UsersService);
    
    
    UsersService.$inject = [];
    function UsersService() {
      var service = this;
    
      service.addUser = function () {
        
      };

      service.getUser = function () {

      };
    }
    
    
    
    })();
    