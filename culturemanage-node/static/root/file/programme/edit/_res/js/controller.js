var app = angular.module('programmeEdit', ['toastr']);
app.controller('programmeEditCtrl', function($scope, programmeSer,$state,toastr,$stateParams){
    var basicId = {id : $stateParams.id};
    programmeSer.countCul().then(function(response){
        if(response.data.code==0){
            $scope.proData = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取值
    programmeSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        programmeSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.programme.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});