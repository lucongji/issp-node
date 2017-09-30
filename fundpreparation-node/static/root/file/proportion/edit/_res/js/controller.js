var app = angular.module('proportionEdit', ['toastr']);
app.controller('proportionEditCtrl', function($scope, proportionSer,$state,toastr,$stateParams){
    var basicId={
        id:$stateParams.id
    };
    //获取值
    proportionSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
/*            var o = {times:'class0'};
            for(key in $scope.data){
                o[key] = $scope.data[key];
            }
            $scope.rationdate.push(o);*/
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        proportionSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.proportion.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});