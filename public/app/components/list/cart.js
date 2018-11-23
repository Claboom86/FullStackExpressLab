"use strict";
const cart = {
    template: `

<form ng-submit="$ctrl.addItem($ctrl.newItem);">
    <input type="text" ng-model="$ctrl.newItem.product" placeholder="product name">
    <input type="text" ng-model="$ctrl.newItem.price" placeholder="price">
    <input type="text" ng-model="$ctrl.newItem.quantity" placeholder="quantity">
    <button>Add Item</button>
</form>

<section class="main-container">
    <section class="cart-container" ng-repeat="obj in $ctrl.items">
        <input class="update__input" type="text" ng-blur="$ctrl.updateItem(obj);" ng-model="obj.product">
        <input class="update__input" type="text" ng-blur="$ctrl.updateItem(obj);" ng-model="obj.price">
        <input class="update__input" type="text" ng-blur="$ctrl.updateItem(obj);" ng-model="obj.quantity">

        <button ng-click="$ctrl.removeItem(obj.id);">X</button>

    </section>
</section>
    `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        function updateCart(result) {
            vm.items = result.data;
        }
 
        CartService.getAllItems().then(updateCart);
       

        vm.addItem = (newItem) => {
            CartService.addItem(newItem).then(updateCart);
        };

        vm.removeItem = (id) => {
            CartService.removeItem(id).then(updateCart);
        };

        vm.updateItem = (editedItem) => {
            CartService.updateItem(editedItem).then(updateCart);
        };

    }]
};

angular
    .module("ShoppingCart")
    .component("cart", cart);