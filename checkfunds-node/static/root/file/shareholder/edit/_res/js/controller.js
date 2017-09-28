var app = angular.module('shareholderEdit', ['toastr']);
app.controller('shareholderEditCtrl', function($scope, shareholderSer,$state,toastr,$stateParams){
    //获取所有一级科目
    shareholderSer.firstSubject().then(function(response){
        if(response.data.code == 0){
            $scope.firstSub1 = response.data.data
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取所有二级科目
    $scope.myFun = function(){
        var data={firstSub:$scope.editInfo.firstName};
        shareholderSer.secondSubject(data).then(function(response){
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
        shareholderSer.thirdSubject(data).then(function(response){
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
    shareholderSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        shareholderSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.shareholder.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});