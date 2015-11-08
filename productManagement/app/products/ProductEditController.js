/**
 * Created by moody on 11/7/2015.
 */
(function(){
    'use strict';

    angular.module('productManagement')
        .controller('ProductEditController',
                    ['product', '$state', ProductEditController]);

    function ProductEditController(product, $state){
        var vm = this;

        vm.product = product;
        if(vm.product && vm.product.productId){
            vm.title = 'Edit: ' + vm.product.productName;
        } else {
            vm.title = 'New Product';
        }

        vm.open = function($event){
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function(isValid){
            if(isValid){
                vm.product.$save(function(data){
                    toastr.success('Save Successful');
                });
            }else{
                toastr.warning('Not saved, form not valid.')
            }

        };

        vm.cancel = function(){
            $state.go('productList');
        };

        vm.addTags = function(tags) {
            if(tags){
                var array = tags.split(',');
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
                vm.newTags = '';
            }else{
                alert('Please enter one or more tags separated by commas');
            }
        }

        vm.removeTags = function(idx){
            vm.product.tags.splice(idx, 1);
        }
    }
}());