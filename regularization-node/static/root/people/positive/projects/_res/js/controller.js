var app = angular.module('positProjects', ['toastr']);
app.controller('positProjectsCtrl', function($scope, positSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};
    //获取所有用户
    positSer.getAllPerson().then(function(response){
        if(response.data.code==0){
            $scope.persons = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取ID
    positSer.positId(webData).then(function(response){
        if(response.data.code==0){
            $scope.vm = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.empEditFun = function(){
        
        $scope.vm.gender = angular.element('.gender').val();
        $scope.vm.hiredate = angular.element('.hiredate').val();
        $scope.vm.posCriteriaConfirmed = angular.element('.posCriteriaConfirmed').val();
        positSer.positProjects($scope.vm).then(function(response){
            if(response.data.code == 0){
                $state.go('root.people.positive.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





