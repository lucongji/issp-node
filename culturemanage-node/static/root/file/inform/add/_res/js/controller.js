var app = angular.module('informAdd', ['toastr']);
app.controller('informAddCtrl', function($scope, informSer,$state,toastr){
    $scope.basicAddFun = function(){
        var vm = $scope;
        informSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.inform.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





