var app = angular.module('journalEdit', ['toastr']);
app.controller('journalEditCtrl', function($scope, journalSer,$state,toastr,$stateParams){
    var basicId = {id : $stateParams.id};
    journalSer.countCul().then(function(response){
        if(response.data.code==0){
            $scope.proData = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取值
    journalSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        vm.editInfo.time = angular.element('.time').val();
        journalSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.journal.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});