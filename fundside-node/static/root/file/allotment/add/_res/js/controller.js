var app = angular.module('allotmentAdd', ['toastr']);
app.controller('allotmentAddCtrl', function($scope, allotmentSer,$state,toastr){
    allotmentSer.getProjectContent().then(function(response){
        if(response.data.code == 0){
            $scope.projects = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    allotmentSer.getInvestorContent().then(function(response){
        if(response.data.code == 0){
            $scope.companys = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicAddFun = function(){
        var vm = $scope;
        allotmentSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.allotment.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





