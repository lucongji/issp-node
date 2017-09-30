var app = angular.module('cashAdd', ['toastr']);
app.controller('cashAddCtrl', function($scope, cashSer,$state,toastr){
    cashSer.getInvestorContent().then(function(response){
        if(response.data.code == 0){
            $scope.companys = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicAddFun = function(){
        var vm = $scope;
        cashSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.cash.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





