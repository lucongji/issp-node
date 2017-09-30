var app = angular.module('waitAdd', ['toastr']);
app.controller('waitAddCtrl', function($scope, waitSer,$state,toastr){
    $scope.waitAddFun = function(){
        var vm = $scope;
        vm.add.carDate=angular.element('.carDate').val();
        waitSer.addWait(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.out.wait.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





