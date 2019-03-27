(function () {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);
    
    
    function FoundItemsDirective() {
      var ddo = {
        templateUrl: 'shoppingList.html',
        scope: {
          items: '<',
          myTitle: '@title',
          onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'list',
        bindToController: true,
        transclude: true
      };
    
      return ddo;
    }
    
    
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var list = this;
    
      // Use factory to create new shopping list service
      var shoppingList = ShoppingListFactory();
    
      list.items = shoppingList.getItems();
      var origTitle = "Shopping List #1";
      list.title = origTitle + " (" + list.items.length + " items )";
    
      list.warning = "COOKIES DETECTED!";
    
      list.itemName = "";
      list.itemQuantity = "";
    
      list.addItem = function () {
        shoppingList.addItem(list.itemName, list.itemQuantity);
        list.title = origTitle + " (" + list.items.length + " items )";
      };
    
      list.removeItem = function (itemIndex) {
        console.log("'this' is: ", this);
        this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
        shoppingList.removeItem(itemIndex);
        this.title = origTitle + " (" + list.items.length + " items )";
      };
    }
    
    
    // If not specified, maxItems assumed unlimited
    function MenuSearchService(maxItems) {
      var service = this;
    
      // List of shopping items
      var items = [];

      service.getmatchedMenuItems = function (searchTerm){

      }
    
     
    }
    
    })();
    