var app = angular.module('communEdit', ['toastr']);
app.controller('communEditCtrl', function($scope, communSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};
    //获取ID
    communSer.communId(webData).then(function(response){
        if(response.data.code==0){
            $scope.vm = response.data.data;
            if($scope.vm.moduleName=="INTERVIEWMODULE"){
                $scope.vm.moduleName="转正面谈模板"
            }else if($scope.vm.moduleName=="INTERVIEWINFORM"){
                $scope.vm.moduleName="转正面谈通知"
            }else if($scope.vm.moduleName=="INTERVIEWNOTIFI"){
                $scope.vm.moduleName="转正通过告知函"
            }
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.empEditFun = function(){
        if($scope.vm.moduleName=="转正面谈模板"){
            $scope.vm.moduleName="INTERVIEWMODULE"
        }else if($scope.vm.moduleName=="转正面谈通知"){
            $scope.vm.moduleName="INTERVIEWINFORM"
        }else if($scope.vm.moduleName=="转正通过告知函"){
            $scope.vm.moduleName="INTERVIEWNOTIFI"
        }
        communSer.communEdit($scope.vm).then(function(response){
            if(response.data.code == 0){
                $state.go('root.people.communication.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





