var app = angular.module('applyTime', ['toastr','angularjs-dropdown-multiselect']);
app.controller('applyTimeCtrl', function($scope, applySer,toastr){
    $scope.collect = function(){
        var data = {
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val()
        };
        applySer.summaryTime(data).then(function(response){
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





