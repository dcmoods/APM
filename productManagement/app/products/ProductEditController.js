/**
 * Created by moody on 11/7/2015.
 */
(function(){
    'use strict';

    angular.module('productManagement')
        .controller('ProductEditController',
                    ['product', ProductEditController]);

    function ProductEditController(product){
        var vm = this;

        vm.product = product;
        if(vm.product && vm.product.productId){
            vm.title = 'Edit: ' + vm.product.productName;
        } else {
            vm.title = 'New Product';
        }
    }
}());