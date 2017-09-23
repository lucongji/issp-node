var app = angular.module('AuditEdit', ['toastr']);
app.controller('applyEditCtrl', function($scope, stayApplySer,$stateParams,$state,toastr){
    var applyData ={id: $stateParams.id};
    //获取ID
    stayApplySer.findApplyId(applyData).then(function(response){
        if(response.data.code==0){
            $scope.editApply = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.applyEditFun = function(){
        $scope.editApply.stayDate = angular.element('.stayDate').val();
        stayApplySer.editGetApply($scope.editApply).then(function(response){
            if(response.data.code == 0){
                $state.go('root.checkin.stayApply.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
    $scope.applyEditCan = function(){
        $state.go('root.checkin.stayApply.list[12]');
    }
});





