var app = angular.module('acceptNotification', ['toastr']);
app.controller('acceptNotificationCtrl', function($scope, acceptSer,$stateParams,$state,toastr){
$scope.showed=true


    var acceptData ={id: $stateParams.id};
    //获取ID
    acceptSer.getAcceptId(acceptData).then(function(response){
        if(response.data.code== 0){
            $scope.notificationAccept = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.acceptNotificationFun = function(){
        var vm = $scope;
        acceptSer.AcceptNotification(vm.notificationAccept).then(function(response){
            if(response.data.code == 0){
                $state.go('root.biddingManagement.biddingaccept.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





