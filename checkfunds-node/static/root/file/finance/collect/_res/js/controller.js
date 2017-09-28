var app = angular.module('financeCollect', ['toastr']);
app.controller('financeCollectCtrl', function($scope, financeSer,toastr){
    $scope.collect = function(){
        data={
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val(),
        };
        financeSer.collectWorks(data).then(function(response){
            if(response.data.code == 0){
                $scope.workOptions = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





