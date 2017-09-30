var app = angular.module('responsAdd', ['toastr']);
app.controller('responsAddCtrl', function($scope, responsSer,$state,toastr){
    responsSer.getInvestorContent().then(function(response){
        if(response.data.code == 0){
            $scope.companys = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicAddFun = function(){
        var vm = $scope;
        responsSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.respons.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





