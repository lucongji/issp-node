var app = angular.module('payholderEdit', ['toastr']);
app.controller('payholderEditCtrl', function($scope, payholderSer,$state,toastr,$stateParams){

    //获取所有一级科目
    payholderSer.firstSubject().then(function(response){
        if(response.data.code == 0){
            $scope.firstSub1 = response.data.data
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取所有二级科目
    $scope.myFun = function(){
        var data={firstSub:$scope.editInfo.firstName};
        payholderSer.secondSubject(data).then(function(response){
            if(response.data.code == 0){
                $scope.firstSub2 = response.data.data
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //获取所有三级科目
    $scope.myFun2 = function(){
        var data={
            firstSub:$scope.editInfo.firstName,
            secondSub:$scope.editInfo.secondName
        };
        payholderSer.thirdSubject(data).then(function(response){
            if(response.data.code == 0){
                $scope.firstSub3 = response.data.data
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    var basicId={
        id:$stateParams.id
    };
    //获取值
    payholderSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        payholderSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.payholder.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});