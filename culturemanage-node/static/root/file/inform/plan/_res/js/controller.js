var app = angular.module('informPlan', ['ng-pagination','toastr']);
app.controller('informPlanCtrl',function($scope,informSer,toastr,$stateParams) {
    var basicId = {id : $stateParams.id};
    informSer.planById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.basicLists = response.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.basicLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
});
