var app = angular.module('acceptAdd', ['toastr']);
app.controller('acceptAddCtrl', function ($scope, acceptSer, $state, toastr) {
$scope.showed=true

    //获取问题提出人
    acceptSer.getUser().then(function(response){

        if(response.data.code==0){
            $scope.User = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    //添加
    $scope.acceptAddFun = function () {
        var vm = $scope;
        vm.accept.getTime = angular.element('.getTime').val();
        vm.accept.expectDealTime = angular.element('.expectDealTime').val();
        vm.accept.processTime = angular.element('.processTime').val();
        acceptSer.AcceptAdd(vm.accept).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.biddingManagement.biddingaccept.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




