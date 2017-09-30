var app = angular.module('transferAdd', ['toastr']);
app.controller('transferAddCtrl', function($scope, transferSer,$state,toastr){
    $scope.basicAddFun = function(){
        var vm = $scope;
        vm.add.transferTime=angular.element('.transferTime').val();
        vm.add.filingTime=angular.element('.filingTime').val();
        transferSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.transfer.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





