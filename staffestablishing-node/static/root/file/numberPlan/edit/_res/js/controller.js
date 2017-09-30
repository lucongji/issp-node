var app = angular.module('numberPlanEdit', ['toastr']);
app.controller('numberPlanEditCtrl', function($scope,$stateParams,numSer,$state,toastr){
    var companyId = {id : $stateParams.id};
    //获取值
    numSer.getOneById(companyId).then(function(response){
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
    $scope.planSonTO = [];
    numSer.allClassify().then(function(response){
        if(response.data.code == 0){
            $scope.classData = response.data.data;
        }
    });
    $scope.myFunc = function() {
        angular.forEach($scope.classData,function(obj){
            $scope.classify2=obj.id
        });
        var classify={classify:$scope.classify2};
        numSer.departContent(classify).then(function(response){
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
        data['planSonTO' + '.depart'] = $scope.depart;
        data['planSonTO' + '.deployNum'] = $scope.deployNum;
        data['planSonTO' + '.policyNum'] = $scope.policyNum;
        data['planSonTO' + '.manNum'] = $scope.manNum;
        data['planSonTO' + '.executeNum'] = $scope.executeNum;
        data['planSonTO' + '.project'] = $scope.project;
          numSer.editContent(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.numberPlan.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});











