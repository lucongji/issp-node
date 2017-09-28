var app = angular.module('initBalanceAdd', ['toastr']);
app.controller('initBalanceAddCtrl', function($scope, initBalanceSer,$state,toastr){
     $scope.basicAddFun = function(){
        var vm = $scope;
        vm.add.date=angular.element('.date').val();
        initBalanceSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.initBalance.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});



