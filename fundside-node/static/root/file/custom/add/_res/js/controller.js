var app = angular.module('customAdd', ['toastr']);
app.controller('customAddCtrl', function($scope, customSer,$state,toastr){
    $scope.basicAddFun = function(){
        var vm = $scope;
        customSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.custom.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





