(function() {
  "use strict";

  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyShoppingController", ToBuyShoppingController)
    .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);


  ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var list = this;

    list.items = ShoppingListCheckOffService.getItemsToBuy();

    list.checkOff = function(itemIndex) {
      console.log("Checking off item ", itemIndex);
      ShoppingListCheckOffService.checkOff(itemIndex);
    };
  }


  AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var list = this;

    list.items = ShoppingListCheckOffService.getItemsBought();
  }


  // ShoppingListCheckOffService.$inject = [];
  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
      { name: "Horlicks milk biscuits", quantity: 1 },
      { name: "Neem oil", quantity: 2 },
      { name: "Baby soap", quantity: 3 },
      { name: "Shampoo", quantity: 4 },
      { name: "Lux Beauty Soap", quantity: 5 },
      { name: "Dettol Handwash", quantity: 6 },
      { name: "Bourbon biscuits", quantity: 7 },
      { name: "Kellog's Corn Flakes", quantity: 8 },
      { name: "Dates", quantity: 9 },
      { name: "Plum Cake", quantity: 10 }
    ];

    var itemsBought = [];

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };

    service.checkOff = function (itemIndex) {
      itemsBought.push(itemsToBuy[itemIndex]);
      itemsToBuy.splice(itemIndex, 1);
    };
  }
})();
