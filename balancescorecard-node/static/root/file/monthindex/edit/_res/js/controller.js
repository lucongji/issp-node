var app = angular.module('monthindexEdit', ['toastr']);
app.controller('monthindexEditCtrl', function($scope, monthindexSer,$stateParams,$state,toastr){
    //指标名称
    monthindexSer.allName().then(function(response){
        if(response.data.code == 0){
            $scope.nameData = response.data.data;
        }
    });
    //获取所有年份
    monthindexSer.allYears().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //指标类型
    monthindexSer.allType().then(function(response){
        if(response.data.code == 0){
            $scope.typeData = response.data.data;
        }
    });
    //维度
    monthindexSer.allDimension().then(function(response){
        if(response.data.code == 0){
            $scope.dimeData = response.data.data;
        }
    });
    //获取所有部门
    monthindexSer.allDepartments().then(function(response){
        if(response.data.code == 0){
            $scope.depData = response.data.data;
        }
    });
    //所有考核方式
    monthindexSer.allAssessment().then(function(response){
        if(response.data.code == 0){
            $scope.assData = response.data.data;
        }
    });
    var basicData ={id: $stateParams.id};
    //获取ID
    monthindexSer.getOneById(basicData).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //是否重新分解
    //编辑点击提交
    $scope.basicEditFun = function(){
        var vm = $scope;
        monthindexSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.monthindex.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





