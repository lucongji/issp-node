var app = angular.module('nameEdit', ['toastr']);
app.controller('nameEditCtrl', function($scope, nameSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
    //获取ID
    nameSer.getOneById(basicData).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.basicEditFun = function(){
        var vm = $scope;
        nameSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.name.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





