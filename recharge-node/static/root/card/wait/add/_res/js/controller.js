var app = angular.module('waitAdd', ['toastr']);
app.controller('waitAddCtrl', function($scope, waitSer,$state,toastr){
    $scope.waitAddFun = function(){
        var vm = $scope;
        vm.add.rechargeDate=angular.element('.rechargeDate').val();
        waitSer.addWait(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.card.wait.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





