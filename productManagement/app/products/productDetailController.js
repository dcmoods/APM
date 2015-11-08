/**
 * Created by moody on 11/7/2015.
 */
(function(){
    'use strict';

    angular.module('productManagement')
        .controller('ProductDetailController',
                    ['product', ProductDetailController]);

    function ProductDetailController(product){
        var vm = this;
        vm.product = product;

        vm.title = 'product Detail: ' + vm.product.productName;

        if(vm.product.tags){
            vm.product.tagList = vm.product.tags.toString();
        }
    }
}());