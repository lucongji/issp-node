var app = angular.module('basicAdd', ['toastr']);
app.controller('basicAddCtrl', function($scope, basicSer,$state,toastr){
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
    $scope.basicAddFun = function(){
        var vm = $scope;
        basicSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.basic.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





