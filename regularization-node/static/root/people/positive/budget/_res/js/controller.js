var app = angular.module('positBudget', ['toastr']);
app.controller('positBudgetCtrl', function($scope, positSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    positSer.positId(webData).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        vm.data.positiveType = angular.element('.positiveType').val();
        vm.data.positiveDate = angular.element('.positiveDate').val();
        positSer.positBudget(vm.data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.people.positive.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





