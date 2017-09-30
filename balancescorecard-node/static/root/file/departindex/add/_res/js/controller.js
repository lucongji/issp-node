var app = angular.module('departindexAdd', ['toastr']);
app.controller('departindexAddCtrl', function($scope, departindexSer,$state,toastr){
    //指标名称
    departindexSer.allName().then(function(response){
        if(response.data.code == 0){
            $scope.nameData = response.data.data;
        }
    });
    //获取所有年份
    departindexSer.allYears().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //指标类型
    departindexSer.allType().then(function(response){
        if(response.data.code == 0){
            $scope.typeData = response.data.data;
        }
    });
    //维度
    departindexSer.allDimension().then(function(response){
        if(response.data.code == 0){
            $scope.dimeData = response.data.data;
        }
    });
    //获取所有部门
    departindexSer.allDepartments().then(function(response){
        if(response.data.code == 0){
            $scope.depData = response.data.data;
        }
    });
    //所有考核方式
    departindexSer.allAssessment().then(function(response){
        if(response.data.code == 0){
            $scope.assData = response.data.data;
        }
    });
    //添加
    $scope.basicAddFun = function(){
        var vm = $scope;
        departindexSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.departindex.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});











