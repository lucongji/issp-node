var app = angular.module('dayEdit', ['toastr']);
app.controller('dayEditCtrl', function($scope, daySummarySer,$stateParams,$state,toastr){
    var dayData ={id: $stateParams.id};
    //获取ID
    daySummarySer.findDayId(dayData).then(function(response){
        if(response.data.code==0){
            $scope.editDay = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.dayEditFun = function(){
        $scope.editDay.stayTime = angular.element('.stayTime').val();
        $scope.editDay.hostTime = angular.element('.hostTime').val();
        daySummarySer.editGetDay($scope.editDay).then(function(response){
            if(response.data.code == 0){
                $state.go('root.checkin.daySummary.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.dayEditCan = function(){
        $state.go('root.checkin.daySummary.list[12]');
    }
});





