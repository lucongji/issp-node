var app = angular.module('profitEdit', ['toastr']);
app.controller('profitEditCtrl', function($scope, profitSer,$state,toastr,$stateParams){
    profitSer.getProjectContent().then(function(response){
        if(response.data.code == 0){
            $scope.projects = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    profitSer.getInvestorContent().then(function(response){
        if(response.data.code == 0){
            $scope.companys = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    var basicId = {id : $stateParams.id};
    //获取值
    profitSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        profitSer.editContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.profit.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});