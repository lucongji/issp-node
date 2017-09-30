var app = angular.module('signAdd', ['toastr']);
app.controller('signAddCtrl', function($scope, signSer,$state,toastr){
    signSer.getInvestorContent().then(function(response){
        if(response.data.code == 0){
            $scope.companys = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicAddFun = function(){
        var vm = $scope;
        vm.add.startProjectTime=angular.element('.startProjectTime').val();
        vm.add.endProjectTime=angular.element('.endProjectTime').val();
        vm.add.forecastArriveTime=angular.element('.forecastArriveTime').val();
        vm.add.exitTime=angular.element('.exitTime').val();
        signSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.sign.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





