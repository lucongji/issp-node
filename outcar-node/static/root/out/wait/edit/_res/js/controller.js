var app = angular.module('waitEdit', ['toastr']);
app.controller('waitEditCtrl', function($scope, waitSer,$state,toastr,$stateParams){
    var capId = {id : $stateParams.id};
    //获取值
    waitSer.getOneById(capId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.waitAddFun = function(){
        var vm = $scope;
        vm.editInfo.carDate=angular.element('.carDate').val();
        waitSer.editWait(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.out.wait.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





