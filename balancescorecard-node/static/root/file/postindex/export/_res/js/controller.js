var app = angular.module('postindexExport', ['toastr']);
app.controller('postindexExportCtrl', function($scope, postindexSer,$state,toastr){
    postindexSer.allDepartments().then(function(response){
        if(response.data.code==0){
            $scope.allNames = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    postindexSer.allType().then(function(response){
        if(response.data.code == 0){
            $scope.typeData = response.data.data;
        }
    });
    postindexSer.allDimension().then(function(response){
        if(response.data.code == 0){
            $scope.dimeData = response.data.data;
        }
    });
    //添加
    $scope.workersAddFun = function(){
        var obj = {
            depart:$scope.depart,
            indexType:$scope.indexType,
            dimension:$scope.dimension,
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val(),
        };
        window.open(`/postindex/exportFile${encode(obj,true)}`);
    };
});
function encode(){
    var obj = arguments[0];
    var contacat = false;
    if (arguments[1]) {
        contacat = true;
    }
    var str = '';
    var count = 0;
    for (var name in obj) {
        if (obj[name]&&( typeof obj[name]) != 'function') {
            str += (((contacat && count == 0) ? '?' : '&') + name + '=' + obj[name]);
            count++;
        }
    }
    return encodeURI(str);
}


