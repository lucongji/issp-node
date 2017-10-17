var app = angular.module('typeEdit', ['toastr']);
app.controller('typeEditCtrl', function($scope, typeSer,$stateParams,$state,toastr){
    var typeData ={id: $stateParams.id};

    //获取ID
    typeSer.findtypeId(typeData).then(function(response){
        if(response.data.code==0){
            $scope.typeEdit = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.typeEditFun = function(){
        var vm = $scope;
        typeSer.edittype(vm.typeEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.biddingManagement.biddingType.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





