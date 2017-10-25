var app = angular.module('progressSummary', ['toastr']);
app.controller('progressSummaryCtrl', function($scope, progressSer){
    
    //外包单位
    progressSer.getUnit().then(function(response){
        if(response.data.code == 0){
            $scope.units = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    //地区
    progressSer.getArea().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    //类型
    progressSer.getType().then(function(response){
        if(response.data.code == 0){
            $scope.types = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    //专业
    progressSer.getMajors().then(function(response){
        if(response.data.code == 0){
            $scope.majorss = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    //运营商名称
    progressSer.getOperator().then(function(response){
        if(response.data.code == 0){
            $scope.operators = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    //派工情况
    progressSer.getTasking().then(function(response){
        if(response.data.code == 0){
            $scope.taskings = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    //实际完工状态
    progressSer.getState().then(function(response){
        if(response.data.code == 0){
            $scope.states = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    $scope.collectFun=function(){
        $scope.vm.invoiceStartTime=angular.element('.invoiceStartTime').val();
        $scope.vm.invoiceEndTime=angular.element('.invoiceEndTime').val();
        $scope.vm.advanceAccountStartTime=angular.element('.advanceAccountStartTime').val();
        $scope.vm.advanceAccountEndTime=angular.element('.advanceAccountEndTime').val();
        progressSer.progSummary($scope.vm).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    }     
});





