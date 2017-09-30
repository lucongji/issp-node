var app = angular.module('nameAdd', ['toastr']);
app.controller('nameAddCtrl', function($scope, nameSer,$state,toastr){
    //添加
    $scope.basicAddFun = function(){
        var vm = $scope;
        nameSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.name.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});











