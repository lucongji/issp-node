var app = angular.module('otherAdd', ['toastr']);
app.controller('otherAddCtrl', function($scope, otherSer,$state,toastr){
    //获取所有一级科目
    otherSer.firstSubject().then(function(response){
        if(response.data.code == 0){
            $scope.firstSub1 = response.data.data
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取所有二级科目
    $scope.myFun = function(){
        var data={firstSub:$scope.add.firstName};
        otherSer.secondSubject(data).then(function(response){
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
            firstSub:$scope.add.firstName,
            secondSub:$scope.add.secondName
        };
        otherSer.thirdSubject(data).then(function(response){
            if(response.data.code == 0){
                $scope.firstSub3 = response.data.data
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    $scope.basicAddFun = function(){
        var vm = $scope;
        vm.add.date=angular.element('.date').val();
        otherSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.other.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});



