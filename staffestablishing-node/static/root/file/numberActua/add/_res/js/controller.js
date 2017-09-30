var app = angular.module('numberActuaAdd', ['toastr']);
app.controller('numberActuaAddCtrl', function($scope, actSer,$state,toastr){
    $scope.actualSonTO = [];
    actSer.allClassify().then(function(response){
        if(response.data.code == 0){
            $scope.classData = response.data.data;
        }
    });
    $scope.myFunc = function() {
        angular.forEach($scope.classData,function(obj){
            $scope.classify2=obj.id
        });
        var classify={classify:$scope.classify2};
        actSer.departContent(classify).then(function(response){
            if(response.data.code == 0){
                $scope.companyNames = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.basicAddFun = function(){
        var vm = $scope;
        var data = {
            classify: vm.classify,
            standard:vm.standard,
        };
        data['actualSonTO' + '.depart'] = $scope.depart;
        data['actualSonTO' + '.deployNum'] = $scope.deployNum;
        data['actualSonTO' + '.policyNum'] = $scope.policyNum;
        data['actualSonTO' + '.manNum'] = $scope.manNum;
        data['actualSonTO' + '.executeNum'] = $scope.executeNum;
        data['actualSonTO' + '.project'] = $scope.project;
        actSer.addContent(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.numberActua.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});











