var app = angular.module('wagesEdit', ['toastr']);
app.controller('wagesEditCtrl', function($scope, wagesSer,$state,toastr,$stateParams){
    var basicId={id:$stateParams.id };
    //获取值
    wagesSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        wagesSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.wages.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});