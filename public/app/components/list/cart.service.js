"use strict";
function CartService($http) {
    const self = this;
    self.getAllItems = () => {
        return $http({
            method: "GET",
            url: "/cart-items"
        });
    };

    self.addItem = (newItem) => {
        return $http({
            url: "/cart-items",
            method: "POST",
            data: newItem
        });
    };

    self.removeItem = (id) => {
        return $http({
            url: `/cart-items/${id}`,
            method: "DELETE",
            data: id
        })
    };

    self.updateItem = (editedItem) => {
        return $http({
            url: `/cart-items/${editedItem.id}`,
            method: "PUT",
            data: editedItem
        })
    };
}

angular
    .module("ShoppingCart")
    .service("CartService", CartService)