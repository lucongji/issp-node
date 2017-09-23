var app = angular.module('departureEditEdit', ['toastr']);
app.controller('departureEditCtrl', function($scope, departureSer,$stateParams,$state,toastr){
    var departureData ={id: $stateParams.id};
    //获取ID
    departureSer.findDepartureId(departureData).then(function(response){
        if(response.data.code==0){
            $scope.editDeparture = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.departureEditFun = function(){
        $scope.editDeparture.hostTime = angular.element('.hostTime').val();
        departureSer.editGetDeparture($scope.editDeparture).then(function(response){
            if(response.data.code == 0){
                $state.go('root.checkin.departureRequest.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.departureEditCan = function(){
        $state.go('root.checkin.departureRequest.list[12]');
    }
});





