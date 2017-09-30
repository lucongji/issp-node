var app = angular.module('payholderCollect', ['toastr']);
app.controller('payholderCollectCtrl', function($scope, payholderSer,toastr){
    $scope.collect = function(){
        data={
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val(),
        };
        payholderSer.collectWorks(data).then(function(response){
            if(response.data.code == 0){
                $scope.workOptions = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





