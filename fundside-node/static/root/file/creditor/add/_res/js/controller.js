var app = angular.module('creditorAdd', ['toastr']);
app.controller('creditorAddCtrl', function($scope, creditorSer,$state,toastr){
    creditorSer.getInvestorContent().then(function(response){
        if(response.data.code == 0){
            $scope.companys = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicAddFun = function(){
        var vm = $scope;
        vm.add.fundEntryTime = angular.element('.fundEntryTime').val();
        creditorSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.creditor.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





