var app = angular.module('revenueSummary', ['toastr']);
app.controller('revenueSummaryCtrl', function($scope, revenueSer){
    $scope.years = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]
    $scope.collectFun=function(){
        revenueSer.revenSummary($scope.vm).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    };
});





