var app = angular.module('journalAdd', ['toastr']);
app.controller('journalAddCtrl', function($scope, journalSer,$state,toastr){
    journalSer.countCul().then(function(response){
        if(response.data.code==0){
            $scope.proData = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicAddFun = function(){
        var vm = $scope;
        vm.add.time = angular.element('.time').val();
        journalSer.addContent(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.journal.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





