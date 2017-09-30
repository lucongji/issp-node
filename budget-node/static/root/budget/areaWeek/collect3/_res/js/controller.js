var app = angular.module('collect3Summary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('collect3SummaryCtrl', function($scope,$state,toastr,areaWeekSer){
   //查询所有地区
    $scope.arrivals = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    areaWeekSer.whereName().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        areaWeekSer.fourthBynameSum($scope.arrivals).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }};
    areaWeekSer.fourthArea4().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});





