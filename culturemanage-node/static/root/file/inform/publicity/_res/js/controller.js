var app = angular.module('informPublicity', ['ng-pagination','toastr']);
app.controller('informPublicityCtrl',function($scope,informSer,toastr,$stateParams) {
    var basicId = {id : $stateParams.id};
    //获取值
    informSer.publicityById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.basicLists = response.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});
