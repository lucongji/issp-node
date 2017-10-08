var app = angular.module('positFollow', ['toastr']);
app.controller('positFollowCtrl', function($scope, positSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    positSer.positId(webData).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        positSer.positFollow(vm.data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.people.positive.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





