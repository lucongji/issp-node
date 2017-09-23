var app = angular.module('infoAdd', ['toastr']);
app.controller('infoAddCtrl', function($scope,infoSer,$state,toastr){
    //添加
    $scope.infoAddFun = function(){
        var vm = $scope;
        vm.appAdd.stayDate = angular.element('.stayDate').val();
        infoSer.addInfo(vm.appAdd).then(function(response){
            if(response.data.code == 0){
                $state.go('root.checkin.infoManage.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.infoAddCan = function(){
        $state.go('root.checkin.infoManage.list[12]');
    }
});




