var app = angular.module('paymentAdd', ['toastr']);
app.controller('paymentAddCtrl', function($scope, paymentSer,$state,toastr){
    $scope.basicAddFun = function(){
        var vm = $scope;
        vm.add.date = angular.element('.date').val();
        paymentSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.payment.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});



