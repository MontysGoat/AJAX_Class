(function () {
  'use strict';
  
  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);
  
  
  CategoriesController.$inject = ['ShoppingListService', 'categories'];
  function CategoriesController(ShoppingListService, categories) {
    var ctrl = this;
    ctrl.categories = categories;
  }
  
  })();