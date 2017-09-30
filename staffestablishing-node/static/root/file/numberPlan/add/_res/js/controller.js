var app = angular.module('numberPlanAdd', ['toastr']);
app.controller('numberPlanAddCtrl', function($scope, numSer,$state,toastr){
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
    $scope.basicAddFun = function(){
        var vm = $scope;
        var data = {
            classify: vm.classify,
            standard:vm.standard,
        };
        data['planSonTO' + '.depart'] = $scope.depart;
        data['planSonTO' + '.deployNum'] = $scope.deployNum;
        data['planSonTO' + '.policyNum'] = $scope.policyNum;
        data['planSonTO' + '.manNum'] = $scope.manNum;
        data['planSonTO' + '.executeNum'] = $scope.executeNum;
        data['planSonTO' + '.project'] = $scope.project;
        numSer.addContent(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.numberPlan.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});











