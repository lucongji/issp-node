var app = angular.module('departindexEdit', ['toastr']);
app.controller('departindexEditCtrl', function($scope, departindexSer,$stateParams,$state,toastr){
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
    var basicData ={id: $stateParams.id};
    //获取ID
    departindexSer.getOneById(basicData).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.basicEditFun = function(){
        var vm = $scope;
        departindexSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.departindex.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});
//自定义过滤器
app.filter('cover124', function(){
    return function(val){
        var result;
        switch(val){
            case "NONE":
                result = "未分解";
                break;
            case "SEPERATE":
                result = "已分解";
                break;
            case "YEAR":
                result = "年度分解";
                break;
            case "DEPARTYEAR":
                result = "部门年度分解";
                break;
            case "DEPARTMONTH":
                result = "部门月度分解";
                break;
            case "FILL":
                result = "手填";
                break;
        }
        return result;
    }
});




