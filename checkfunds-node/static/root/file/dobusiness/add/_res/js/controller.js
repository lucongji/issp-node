var app = angular.module('dobusinessAdd', ['toastr']);
app.controller('dobusinessAddCtrl', function($scope, doSer,$state,toastr){
    doSer.allType().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    $scope.basicAddFun = function(){
        var vm = $scope;
        vm.add.date=angular.element('.date').val();
        doSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.dobusiness.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});



