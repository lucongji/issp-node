var app = angular.module('programmeAdd', ['toastr']);
app.controller('programmeAddCtrl', function($scope, programmeSer,$state,toastr){
    programmeSer.countCul().then(function(response){
        if(response.data.code==0){
            $scope.proData = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicAddFun = function(){
        var vm = $scope;
        var data={
            name:vm.add.name,
            infoId:vm.add.infoId,
            way:vm.add.way,
            executer:vm.add.executer,
            executeCycle:vm.add.executeCycle,
            executeCost:vm.add.executeCost,
        };
        programmeSer.addContent(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.programme.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





