var app = angular.module('detailProSummaryCtrl', ['toastr','angularjs-dropdown-multiselect']);
app.controller('detailProSummaryCtrl', function($scope, detailSer){
    $scope.innerNames = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取公司
    detailSer.listSummaryPro().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        detailSer.summaryProDetail($scope.innerNames).then(function(response){
            if($scope.innerNames.length == 0){
                $scope.summaryLists = {}
            }else if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    }};
});





