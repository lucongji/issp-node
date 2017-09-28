var app = angular.module('otherCollect', ['toastr']);
app.controller('otherCollectCtrl', function($scope, otherSer,toastr){
    $scope.collect = function(){
        data={
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val(),
        };
        otherSer.collectWorks(data).then(function(response){
            if(response.data.code == 0){
                $scope.workOptions = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





