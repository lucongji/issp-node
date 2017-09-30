var app = angular.module('collectTheMonth', ['toastr']);
app.controller('collectTheMonthCtrl', function($scope,$state,$stateParams,toastr,areaMonthSer){
    var collectId = {id:$stateParams.id};
    areaMonthSer.listTheMonthArea(collectId).then(function(response){
        if(response.data.code==0){
            $scope.showInfo=response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.moreList = function(event){
        angular.forEach($scope.monthLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
});





