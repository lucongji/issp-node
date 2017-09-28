var app = angular.module('investFormAdd', ['toastr']);
app.controller('investFormAddCtrl', function($scope, investFormSer,$state,toastr){
    $scope.basicAddFun = function(){
        var vm = $scope;
        investFormSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.investForm.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





