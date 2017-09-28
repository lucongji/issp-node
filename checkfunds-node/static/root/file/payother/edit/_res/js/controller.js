var app = angular.module('payotherEdit', ['toastr']);
app.controller('payotherEditCtrl', function($scope, payotherSer,$state,toastr,$stateParams){

    //获取所有一级科目
    payotherSer.firstSubject().then(function(response){
        if(response.data.code == 0){
            $scope.firstSub1 = response.data.data
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取所有二级科目
    $scope.myFun = function(){
        var data={firstSub:$scope.editInfo.firstName};
        payotherSer.secondSubject(data).then(function(response){
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
        payotherSer.thirdSubject(data).then(function(response){
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
    payotherSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        payotherSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.payother.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});