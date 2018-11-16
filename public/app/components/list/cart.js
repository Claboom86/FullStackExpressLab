"use strict";
const cart = {
    template: `
    <button class="get-btn" ng-click="$ctrl.getAllItems();">Get Items</button>

<section class="main-container">
    <section class="cart-container" ng-repeat="obj in $ctrl.items">
    
            <p id="product">{{ obj.product }}</p>
            <p id="price">Price:  $ {{ obj.price }}</p>
            <p id="quantity">Quantity:  {{ obj.quantity }}</p>

    </section>
</section>
    `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        vm.getAllItems = () => {
            CartService.getAllItems().then((response) => {
                console.log(response);
                vm.items = response.data;
            })
        };
    }]
};

angular
    .module("ShoppingCart")
    .component("cart", cart);