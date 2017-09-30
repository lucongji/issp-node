var app = angular.module('postindexEdit', ['toastr']);
app.controller('postindexEditCtrl', function($scope, postindexSer,$stateParams,$state,toastr){
    //指标名称
    postindexSer.allName().then(function(response){
        if(response.data.code == 0){
            $scope.nameData = response.data.data;
        }
    });
    //获取所有年份
    postindexSer.allYears().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //指标类型
    postindexSer.allType().then(function(response){
        if(response.data.code == 0){
            $scope.typeData = response.data.data;
        }
    });
    //维度
    postindexSer.allDimension().then(function(response){
        if(response.data.code == 0){
            $scope.dimeData = response.data.data;
        }
    });
    //获取所有部门
    postindexSer.allDepartments().then(function(response){
        if(response.data.code == 0){
            $scope.depData = response.data.data;
        }
    });
    //所有考核方式
    postindexSer.allAssessment().then(function(response){
        if(response.data.code == 0){
            $scope.assData = response.data.data;
        }
    });
    var basicData ={id: $stateParams.id};
    //获取ID
    postindexSer.getOneById(basicData).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.basicEditFun = function(){
        var vm = $scope;
        postindexSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.postindex.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





