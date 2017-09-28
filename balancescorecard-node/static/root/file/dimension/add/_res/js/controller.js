var app = angular.module('dimensionAdd', ['toastr']);
app.controller('dimensionAddCtrl', function($scope, dimensionSer,$state,toastr){
    //添加
    $scope.basicAddFun = function(){
        var vm = $scope;
        dimensionSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.dimension.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});











