var app = angular.module('departureAuditM', ['toastr']);
app.controller('departureAuditCtrl', function($scope, departureSer,$stateParams,$state,toastr){
    var departureData ={id: $stateParams.id};
    //获取ID
    departureSer.findDepartureId(departureData).then(function(response){
        if(response.data.code==0){
            $scope.editDeparture = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //审核
    $scope.departureAuditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.editDeparture.id,
            checkStatus:vm.editDeparture.checkStatus,
        };
        departureSer.auditDepartures(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.checkin.departureRequest.list[12]',{id:null});
                toastr.success("已成功审核", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    $scope.departureAuditCan = function(){
        $state.go('root.checkin.departureRequest.list[12]',{id:null});
    }

});




