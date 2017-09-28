var app = angular.module('wagesAdd', ['toastr']);
app.controller('wagesAddCtrl', function($scope, wagesSer,$state,toastr){
    $scope.basicAddFun = function(){
        var vm = $scope;
        var data = {
            min:vm.add.min,
            max:vm.add.max,
            rate:vm.add.rate,
        };
        wagesSer.addContent(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.wages.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});











