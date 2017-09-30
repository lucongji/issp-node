var app = angular.module('prepareanalysis', ['toastr']);
app.controller('prepareanalysisCtrl', function($scope, prepareSer,$state,toastr){
    prepareSer.collectAnalysis().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});








