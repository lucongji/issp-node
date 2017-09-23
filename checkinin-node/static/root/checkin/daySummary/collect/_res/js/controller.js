var app = angular.module('collectModule', ['ng-pagination','toastr','angularjs-dropdown-multiselect']);
app.controller('collectCtrl',function($scope,daySummarySer,toastr){
    $scope.names = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取名字
    daySummarySer.listNamePro().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    $scope.getSummary ={onSelectionChanged(){

        daySummarySer.getDayCollect($scope.names).then(function(response){
            if($scope.names.length == 0){
                $scope.summaryLists = {}
            }else if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    }};
});

