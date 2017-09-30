var app = angular.module('collect1Sum', ['toastr','angularjs-dropdown-multiselect']);
app.controller('collect1SumCtrl', function($scope,$state,toastr,proWeekSer){
   //查询所有项目
    $scope.projects = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    proWeekSer.collFirst().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        proWeekSer.collSumSecond($scope.projects).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }};
    proWeekSer.collAllNew2().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});





