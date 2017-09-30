var app = angular.module('doCollect', ['toastr']);
app.controller('doCollectCtrl', function($scope, doSer,toastr){
    $scope.collect = function(){
        data={
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val(),
        };
        doSer.collectWorks(data).then(function(response){
            if(response.data.code == 0){
                $scope.workOptions = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





