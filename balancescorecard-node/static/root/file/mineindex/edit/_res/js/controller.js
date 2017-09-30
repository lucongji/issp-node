var app = angular.module('mineindexEdit', ['toastr']);
app.controller('mineindexEditCtrl', function($scope, mineindexSer,$stateParams,$state,toastr){
    //指标名称
    mineindexSer.allName().then(function(response){
        if(response.data.code == 0){
            $scope.nameData = response.data.data;
        }
    });
    //获取所有年份
    mineindexSer.allYears().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //指标类型
    mineindexSer.allType().then(function(response){
        if(response.data.code == 0){
            $scope.typeData = response.data.data;
        }
    });
    //维度
    mineindexSer.allDimension().then(function(response){
        if(response.data.code == 0){
            $scope.dimeData = response.data.data;
        }
    });
    //获取所有部门
    mineindexSer.allDepartments().then(function(response){
        if(response.data.code == 0){
            $scope.depData = response.data.data;
        }
    });
    //所有考核方式
    mineindexSer.allAssessment().then(function(response){
        if(response.data.code == 0){
            $scope.assData = response.data.data;
        }
    });
    var basicData ={id: $stateParams.id};
    //获取ID
    mineindexSer.getOneById(basicData).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.basicEditFun = function(){
        var vm = $scope;
        mineindexSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.mineindex.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





