"use strict";
const cart = {
    template: `
<section id="add-container">
    <form ng-submit="$ctrl.addItem($ctrl.newItem);">
        <input class="new-item" type="text" ng-model="$ctrl.newItem.product" placeholder="Product Name">
        <input class="new-item" type="text" ng-model="$ctrl.newItem.price" placeholder="Price">
        <input class="new-item" type="text" ng-model="$ctrl.newItem.quantity" placeholder="Quantity">
        <button id="add-btn">Add Item</button>
    </form>
</section>

<h2>Cart</h2>

<section class="main-container">
    <section class="cart-container" ng-repeat="obj in $ctrl.items">
        <input id="product" type="text" ng-blur="$ctrl.updateItem(obj);" ng-model="obj.product">
        <section id="price-container">
            <label>Price: $</label>
            <input id="price" type="text" ng-blur="$ctrl.updateItem(obj);" ng-model="obj.price">
         </section>
            <label>Quantity: </label>
        <input id="quantity" class="update-input" type="text" ng-blur="$ctrl.updateItem(obj);" ng-model="obj.quantity">

        <button id="delete-btn" ng-click="$ctrl.removeItem(obj.id);">X</button>

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