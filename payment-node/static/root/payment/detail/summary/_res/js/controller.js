var app = angular.module('detailSummary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('detailSummaryCtrl', function($scope, detailSer){
    $scope.areas = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取公司
    detailSer.listSummaryArea().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        detailSer.summaryDetail($scope.areas).then(function(response){
            if($scope.areas.length == 0){
                $scope.summaryLists = {}
            }else if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    }};
});





