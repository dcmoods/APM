/**
 * Created by moody on 11/7/2015.
 */
(function(){
    'use strict';

    angular.module('productManagement')
        .controller('ProductDetailController',
                    ['product', 'productService', ProductDetailController]);

    function ProductDetailController(product, productService){
        var vm = this;
        vm.product = product;

        vm.title = 'product Detail: ' + vm.product.productName;

        vm.marginPercent = productService.calculateMarginPercent(vm.product.price, vm.product.cost);

        if(vm.product.tags){
            vm.product.tagList = vm.product.tags.toString();
        }
    }
}());