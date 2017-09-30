var app = angular.module('applyAdd', ['toastr']);
app.controller('applyAddCtrl', function($scope, applySer,$state,toastr){
    $scope.basicAddFun = function(){
        var vm = $scope;
        vm.add.fundEntryTime = angular.element('.fundEntryTime').val();
        applySer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.apply.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





