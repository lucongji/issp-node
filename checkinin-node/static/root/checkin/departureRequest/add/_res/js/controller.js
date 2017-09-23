var app = angular.module('applyAdd', ['toastr']);
app.controller('departureAddCtrl', function($scope,departureSer,$state,toastr){
    //添加
    $scope.departureAddFun = function(){
        var vm = $scope;
        vm.appAdd.hostTime = angular.element('.hostTime').val();
        departureSer.addDeparture(vm.appAdd).then(function(response){
            if(response.data.code == 0){
                $state.go('root.checkin.departureRequest.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.departureAddCan = function(){
        $state.go('root.checkin.departureRequest.list[12]');
    }

});




