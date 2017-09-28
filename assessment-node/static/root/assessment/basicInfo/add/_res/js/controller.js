var app = angular.module('basicInfoAdd', ['toastr']);
app.controller('basicInfoAddCtrl', function ($scope, basicInfoSer, $state, toastr) {
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
        var projectName={name:$scope.add.project};
        basicInfoSer.otherSubject(projectName).then(function(response){
            if(response.data.code == 0){
                $scope.firstManage = response.data.data;
            }
        });
    };
    //添加
    $scope.basicInfoAddFun = function () {
        var vm = $scope;
        vm.add.startTime = angular.element('.startTime').val();
        vm.add.endTime = angular.element('.endTime').val();
        vm.add.taxes=vm.firstManage.taxes;
        vm.add.totalAmount=vm.firstManage.totalAmount;
        basicInfoSer.addBasicInfo(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.assessment.basicInfo.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});




