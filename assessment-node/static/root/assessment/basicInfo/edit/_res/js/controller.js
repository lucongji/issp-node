var app = angular.module('basicInfoEdit', ['toastr']);
app.controller('basicInfoEditCtrl', function($scope, basicInfoSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
    $scope.firstManage={};
    //获取ID
    basicInfoSer.findInfoId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
            $scope.firstManage.taxes=$scope.editInfo.taxes;
            $scope.firstManage.totalAmount=$scope.editInfo.totalAmount
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    basicInfoSer.areaInfo().then(function(response){
        if(response.data.code == 0){
            $scope.areanames = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    basicInfoSer.nameInfo().then(function(response){
        if(response.data.code == 0){
            $scope.names = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.myFun = function(){
        var projectName={name:$scope.editInfo.project};
        basicInfoSer.otherSubject(projectName).then(function(response){
            if(response.data.code == 0){
                $scope.firstManage = response.data.data;
            }
        });
    };
     //编辑点击提交
    $scope.basicInfoEditFun = function(){
        var vm = $scope;
        vm.editInfo.startTime = angular.element('.startTime').val();
        vm.editInfo.endTime = angular.element('.endTime').val();
        vm.editInfo.taxes=vm.firstManage.taxes;
        vm.editInfo.totalAmount=vm.firstManage.totalAmount;
        basicInfoSer.editBasicInfo(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.basicInfo.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





