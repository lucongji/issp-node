var app = angular.module('positAdd', ['toastr']);
app.controller('positAddCtrl', function ($scope, positSer, $state, toastr) {
    //添加
    $scope.positAddFun = function () {
        if($scope.vm.gender=="无"){
            $scope.vm.gender="NONE"
        }else if($scope.vm.gender=="男"){
            $scope.vm.gender="MAN"
        }else if($scope.vm.gender=="女"){
            $scope.vm.gender="WOMAN"
        }
        // var vm = $scope;
        $scope.vm.hiredate = angular.element('.hiredate').val();
        positSer.positAdd($scope.vm).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.people.positive.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




