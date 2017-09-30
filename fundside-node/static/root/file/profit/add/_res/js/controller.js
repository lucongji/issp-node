var app = angular.module('profitAdd', ['toastr']);
app.controller('profitAddCtrl', function($scope, profitSer,$state,toastr){
    profitSer.getInvestorContent().then(function(response){
        if(response.data.code == 0){
            $scope.companys = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    profitSer.getProjectContent().then(function(response){
        if(response.data.code == 0){
            $scope.projects = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicAddFun = function(){
        var vm = $scope;
        profitSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.profit.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





