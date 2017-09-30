var app = angular.module('yearindexAdd', ['toastr']);
app.controller('yearindexAddCtrl', function($scope, yearindexSer,$state,toastr){
    //指标名称
    yearindexSer.allName().then(function(response){
        if(response.data.code == 0){
            $scope.nameData = response.data.data;
        }
    });
    //获取所有年份
    yearindexSer.allYears().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //指标类型
    yearindexSer.allType().then(function(response){
        if(response.data.code == 0){
            $scope.typeData = response.data.data;
        }
    });
    //维度
    yearindexSer.allDimension().then(function(response){
        if(response.data.code == 0){
            $scope.dimeData = response.data.data;
        }
    });
    //添加
    $scope.basicAddFun = function(){
        var vm = $scope;
        yearindexSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.yearindex.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});











