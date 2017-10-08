var app = angular.module('communAdd', ['toastr']);
app.controller('communAddCtrl', function ($scope, communSer, $state, toastr) {
    //添加
    $scope.empAddFun = function () {
        if($scope.data.moduleName=="转正面谈模板"){
            $scope.data.moduleName="INTERVIEWMODULE"
        }else if($scope.data.moduleName=="转正面谈通知"){
            $scope.data.moduleName="INTERVIEWINFORM"
        }else if($scope.data.moduleName=="转正通过告知函"){
            $scope.data.moduleName="INTERVIEWNOTIFI"
        }
        var vm = $scope;
        communSer.communAdd(vm.data).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.people.communication.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




