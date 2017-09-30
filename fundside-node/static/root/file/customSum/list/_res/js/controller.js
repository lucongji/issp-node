var app = angular.module('customSumList', ['toastr','angularjs-dropdown-multiselect']);
app.controller('customSumListCtrl',function($scope,customSumSer,toastr) {
    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取公司
    customSumSer.getInvestorContent().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });


    $scope.getSummary ={onSelectionChanged(){
        if($scope.words==0){
            //为空时不传
            $scope.summaryLists = {};
        }else {
            customSumSer.ectSummaryInvestor($scope.words).then(function(response){
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
