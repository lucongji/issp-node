var app = angular.module('applyAdd', ['toastr']);
app.controller('applyAddCtrl', function($scope,stayApplySer,$state,toastr){
    //添加
    $scope.applyAddFun = function(){
        var vm = $scope;
        vm.appAdd.stayDate = angular.element('.stayDate').val();
        vm.appAdd.isCompanyPay = angular.element('.isCompanyPay').val();
        stayApplySer.addApply(vm.appAdd).then(function(response){
            if(response.data.code == 0){
                $state.go('root.checkin.stayApply.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.applyAddCan = function(){
        $state.go('root.checkin.stayApply.list[12]');
    }
});




