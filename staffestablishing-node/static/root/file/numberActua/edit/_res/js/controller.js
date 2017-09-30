var app = angular.module('numberActuaEdit', ['toastr']);
app.controller('numberActuaEditCtrl', function($scope,$stateParams,actSer,$state,toastr){
    var companyId = {id : $stateParams.id};
    //获取值
    actSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
            $scope.sal1= $scope.editInfo.sons;
            angular.forEach($scope.sal1,function(obj){
                $scope.depart=obj.depart;
                $scope.policyNum=obj.policyNum;
                $scope.deployNum=obj.deployNum;
                $scope.project=obj.project;
                $scope.executeNum=obj.executeNum;
                $scope.manNum=obj.manNum;
            });
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
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
    $scope.basicEditFun = function(){
        var vm = $scope;
        var data = {
            classify: vm.editInfo.classify,
            standard:vm.editInfo.standard,
            id:vm.editInfo.id,
        };
        data['actualSonTO' + '.depart'] = $scope.depart;
        data['actualSonTO' + '.deployNum'] = $scope.deployNum;
        data['actualSonTO' + '.policyNum'] = $scope.policyNum;
        data['actualSonTO' + '.manNum'] = $scope.manNum;
        data['actualSonTO' + '.executeNum'] = $scope.executeNum;
        data['actualSonTO' + '.project'] = $scope.project;
        actSer.editContent(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.numberActua.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});











