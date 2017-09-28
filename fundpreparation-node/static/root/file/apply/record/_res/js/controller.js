var app = angular.module('applyRecord', ['toastr']);
app.controller('applyRecordCtrl', function($scope, applySer,$state,toastr,$stateParams){
    var capId = {id : $stateParams.id};
    //获取值
    applySer.getRecordById(capId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});
