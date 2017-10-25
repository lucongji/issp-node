var app = angular.module('revenueAdd', ['toastr']);
app.controller('revenueAddCtrl', function ($scope, revenueSer, $state, toastr) {
    //添加
    $scope.detailAddFun = function () {
        $scope.reven.time=angular.element('.time').val();
        revenueSer.revenAdd($scope.reven).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.payment.revenue.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示')
            }
        });
    };
});




