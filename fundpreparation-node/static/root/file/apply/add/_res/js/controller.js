var app = angular.module('applyAdd', ['toastr']);
app.controller('applyAddCtrl', function($scope,$state,toastr,applySer){
    $scope.basicAddFun = function () {
        var vm = $scope;
        var data={
            tableName : angular.element('.tableName').val()
        }
        applySer.addContent(data).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.file.apply.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





