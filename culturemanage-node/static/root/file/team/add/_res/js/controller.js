var app = angular.module('teamAdd', ['toastr']);
app.controller('teamAddCtrl', function($scope, teamSer,$state,toastr){
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
    $scope.basicAddFun = function(){
        var vm = $scope;
        var data={
            userNumber:vm.number,
            userName:vm.listNames.username,
            userId:vm.listNames.id,
        };
        teamSer.addContent(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.team.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});



