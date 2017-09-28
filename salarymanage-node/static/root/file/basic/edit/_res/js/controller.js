var app = angular.module('basicEdit', ['toastr']);
app.controller('basicEditCtrl', function($scope, basicSer,$state,toastr,$stateParams){
    basicSer.getAreaContent().then(function(response){
        if(response.data.code==0){
            $scope.areas = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    basicSer.getHierarchyContent().then(function(response){
        if(response.data.code==0){
            $scope.hierarchy = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    basicSer.getDepartContent().then(function(response){
        if(response.data.code==0){
            $scope.departs = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    basicSer.getPositionContent().then(function(response){
        if(response.data.code==0){
            $scope.pos = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    var basicId = {id : $stateParams.id};
    //获取值
    basicSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        basicSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.basic.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});