var app = angular.module('applyCapital', ['toastr','angularjs-dropdown-multiselect']);
app.controller('applyCapitalCtrl', function($scope, applySer,toastr){
    $scope.words = [];
    $scope.workOptions = ['一次定投','定期定投','非定期定投'];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
        $scope.getSummary ={onSelectionChanged(){
            if($scope.words==0){
                      //为空时不传
                $scope.summaryLists = {};
            }else {
                applySer.ectSummaryToFund($scope.words).then(function(response){
                    if($scope.words.length == 0){
                        $scope.summaryLists = {};
                    }else if(response.data.code == 0){
                        $scope.summaryLists = response.data.data;
                    }else{
                        toastr.error(response.data.msg, '温馨提示');
                    }
                })
            }
        }};
});





