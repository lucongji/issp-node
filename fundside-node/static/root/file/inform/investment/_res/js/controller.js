var app = angular.module('informIn', ['toastr']);
app.controller('informInCtrl', function($scope, informwSer,$state,toastr,$stateParams){
    var basicId = {id : $stateParams.id};
    //获取值
    informwSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.add = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicAddFun = function(){
        var vm = $scope;
        vm.add.investDate=angular.element('.investDate').val(),
         informwSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.inform.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





