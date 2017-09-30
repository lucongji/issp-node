var app = angular.module('libraryTypeExport', ['toastr']);
app.controller('libraryTypeExportCtrl', function($scope,libraryindexSer){
    //指标类型
    libraryindexSer.allType().then(function(response){
        if(response.data.code == 0){
            $scope.typeData = response.data.data;
        }
    });
    //添加
    $scope.workersAddFun = function(){
        var obj = {
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val(),
            indexType:$scope.indexType,
            flag:$scope.flag,
        };
        window.open(`/departTypeExport/exportFile${encode(obj,true)}`);
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


