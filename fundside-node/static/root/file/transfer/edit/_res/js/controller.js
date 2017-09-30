var app = angular.module('transferEdit', ['toastr']);
app.controller('transferEditCtrl', function($scope, transferSer,$state,toastr,$stateParams){
    var basicId = {id : $stateParams.id};
    //获取值
    transferSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        vm.editInfo.transferTime=angular.element('.transferTime').val();
        vm.editInfo.filingTime=angular.element('.filingTime').val();
        transferSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.transfer.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});