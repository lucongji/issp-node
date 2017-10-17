var app = angular.module('typeAdd', ['toastr']);
app.controller('typeAddCtrl', function ($scope, typeSer, $state, toastr) {

    //添加
    $scope.TypeaddFun = function () {
        var vm = $scope;
        typeSer.addtype(vm.type).then(function (response) {
            if (response.data.code == 0) {
                $state.go('_root.biddingManagement.biddingType.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




