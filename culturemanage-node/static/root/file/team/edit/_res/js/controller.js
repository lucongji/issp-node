var app = angular.module('teamEdit', ['toastr']);
app.controller('teamEditCtrl', function($scope, teamSer,$state,toastr,$stateParams){
    var basicId = {id : $stateParams.id};
    teamSer.countTarget().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    $scope.myFunc = function() {
        var number={number:$scope.number};
        teamSer.getOneByNumber(number).then(function(response){
            if(response.data.code == 0){
                $scope.listNames = response.data.data[0];
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    //获取值
    teamSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        var data={
            id:vm.editInfo.id,
            userNumber:vm.number,
            userName:vm.listNames.username,
            userId:vm.listNames.id,
        };
        teamSer.editContent(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.team.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});