var app = angular.module('dayAdd', ['toastr']);
app.controller('dayAddCtrl', function($scope,daySummarySer,$state,toastr){
    //添加
    $scope.dayAddFun = function(){
        var vm = $scope;
        vm.appAdd.stayTime = angular.element('.stayTime').val();
        vm.appAdd.hostTime = angular.element('.hostTime').val();
        daySummarySer.addDay(vm.appAdd).then(function(response){
            if(response.data.code == 0){
                $state.go('root.checkin.daySummary.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.dayAddCan = function(){
        $state.go('root.checkin.daySummary.list[12]');
    }

});




