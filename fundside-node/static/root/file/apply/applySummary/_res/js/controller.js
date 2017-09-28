var app = angular.module('applyCollect', ['toastr','angularjs-dropdown-multiselect']);
app.controller('applyCollectCtrl', function($scope, applySer,toastr){
    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取公司
    applySer.getInvestorContent().then(function(response){
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
                applySer.ectSummaryInvestor($scope.words).then(function(response){
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





