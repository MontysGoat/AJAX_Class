(function () {
  'use strict';
  
  angular.module('Data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', "https://www.davidchuschinabistro.com");
  
  
  MenuDataService.$inject = ['$http', 'ApiBasePath']
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getCategories = function () {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      })
      .then(function (result) {
        return result;
      })
    };
  }
  
  })();