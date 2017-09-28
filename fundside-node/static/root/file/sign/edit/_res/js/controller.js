var app = angular.module('signEdit', ['toastr']);
app.controller('signEditCtrl', function($scope, signSer,$state,toastr,$stateParams){
    signSer.getInvestorContent().then(function(response){
        if(response.data.code == 0){
            $scope.companys = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    var basicId = {id : $stateParams.id};
    //获取值
    signSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        vm.editInfo.startProjectTime=angular.element('.startProjectTime').val();
        vm.editInfo.endProjectTime=angular.element('.endProjectTime').val();
        vm.editInfo.forecastArriveTime=angular.element('.forecastArriveTime').val();
        vm.editInfo.exitTime=angular.element('.exitTime').val();
        signSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.sign.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});