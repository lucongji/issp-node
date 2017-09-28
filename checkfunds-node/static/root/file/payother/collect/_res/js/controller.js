var app = angular.module('payotherCollect', ['toastr']);
app.controller('payotherCollectCtrl', function($scope, payotherSer,toastr){
    $scope.collect = function(){
        data={
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val(),
        };
        payotherSer.collectWorks(data).then(function(response){
            if(response.data.code == 0){
                $scope.workOptions = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





