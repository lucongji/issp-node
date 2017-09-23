var app = angular.module('demAuditM', ['toastr']);
app.controller('applyAuditCtrl', function($scope, stayApplySer,$stateParams,$state,toastr){
    var applyData ={id: $stateParams.id};
    //获取ID
    stayApplySer.findApplyId(applyData).then(function(response){
        if(response.data.code==0){
            $scope.editApply = response.data.data;

        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //审核
    $scope.demandAuditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.editApply.id,
            headAudit: vm.editApply.headAudit,
            checkStatus: vm.editApply.checkStatus,
        };
        stayApplySer.auditApplys(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.checkin.stayApply.list[12]');
                toastr.success("已成功审核", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    $scope.demandAuditCan = function(){

    }

});




