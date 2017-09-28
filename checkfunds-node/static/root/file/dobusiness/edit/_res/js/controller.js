var app = angular.module('dobusinessEdit', ['toastr']);
app.controller('dobusinessEditCtrl', function($scope, doSer,$state,toastr,$stateParams){
    var basicId={
        id:$stateParams.id
    };
    doSer.allType().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //获取值
    doSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        vm.editInfo.date=angular.element('.date').val();
        doSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.dobusiness.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});