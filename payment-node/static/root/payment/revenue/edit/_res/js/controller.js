var app = angular.module('revenueEdit', ['toastr']);
app.controller('revenueEditCtrl', function($scope, revenueSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
    //获取ID
    revenueSer.revenId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.reven = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    //编辑点击提交
    $scope.revenueEditFun = function(){
        $scope.reven.time=angular.element('.time').val();
        revenueSer.revenEdit($scope.reven).then(function(response){
            if(response.data.code == 0){
                $state.go('root.payment.revenue.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    };
});





