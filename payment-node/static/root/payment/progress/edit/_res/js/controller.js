var app = angular.module('progressEdit', ['toastr']);
app.controller('progressEditCtrl', function($scope, progressSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
    //获取ID
    progressSer.progId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.prog = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    //编辑点击提交
    $scope.progressEditFun = function(){
        $scope.prog.completeTime=angular.element('.completeTime').val();
        $scope.prog.clearingData=angular.element('.clearingData').val();
        $scope.prog.softCoreReport=angular.element('.softCoreReport').val();
        $scope.prog.signature=angular.element('.signature').val();
        $scope.prog.dataUploadSystem=angular.element('.dataUploadSystem').val();
        $scope.prog.managerAudit=angular.element('.managerAudit').val();
        $scope.prog.acceptApply=angular.element('.acceptApply').val();
        $scope.prog.outsourceAudit=angular.element('.outsourceAudit').val();
        $scope.prog.officeAudit=angular.element('.officeAudit').val();
        $scope.prog.systemInvoice=angular.element('.systemInvoice').val();
        $scope.prog.electronicInvoice=angular.element('.electronicInvoice').val();
        $scope.prog.physicalInvoice=angular.element('.physicalInvoice').val();
        $scope.prog.fillInvoice=angular.element('.fillInvoice').val();
        $scope.prog.physicalInvoiceComplete=angular.element('.physicalInvoiceComplete').val();
        $scope.prog.payTime=angular.element('.payTime').val();
        $scope.prog.invoice=angular.element('.invoice').val();
        $scope.prog.advanceAccountTime=angular.element('.advanceAccountTime').val();
        $scope.prog.arrivalTime=angular.element('.arrivalTime').val();
        progressSer.progEdit($scope.prog).then(function(response){
            if(response.data.code == 0){
                $state.go('root.payment.progress.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    };
});





