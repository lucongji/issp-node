var app = angular.module('basicEdit', ['toastr']);
app.controller('basicEditCtrl', function($scope, basicSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
    //获取ID
    basicSer.getOneById(basicData).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.basicEditFun = function(){
        var vm = $scope;
        basicSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.basic.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





