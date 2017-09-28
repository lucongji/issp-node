var app = angular.module('shareholderAdd', ['toastr']);
app.controller('shareholderAddCtrl', function($scope, shareholderSer,$state,toastr){
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
        var data={firstSub:$scope.add.firstName};
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
            firstSub:$scope.add.firstName,
            secondSub:$scope.add.secondName
        };
        shareholderSer.thirdSubject(data).then(function(response){
            if(response.data.code == 0){
                $scope.firstSub3 = response.data.data
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

    $scope.basicAddFun = function(){
        var vm = $scope;
        vm.add.date = angular.element('.date').val();
        shareholderSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.shareholder.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});



