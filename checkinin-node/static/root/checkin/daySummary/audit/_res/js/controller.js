var app = angular.module('dayAuditM', ['toastr']);
app.controller('dayAuditCtrl', function($scope, daySummarySer,$stateParams,$state,toastr){
    var applyData ={id: $stateParams.id};
    //获取ID
    daySummarySer.findDayId(applyData).then(function(response){
        if(response.data.code==0){
            $scope.auditDay = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //审核
    $scope.demandAuditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.auditDay.id,
            checkStatus: vm.auditDay.checkStatus,
        };
        daySummarySer.auditDays(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.checkin.daySummary.list[12]');
                toastr.success("已成功审核", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    $scope.demandAuditCan = function(){
        $state.go('root.checkin.daySummary.list[12]');
    }

});




