var app = angular.module('yearindexExport', ['toastr']);
app.controller('yearindexExportCtrl', function($scope, yearindexSer,$state,toastr){
    yearindexSer.allYears().then(function(response){
        if(response.data.code==0){
            $scope.yearsNames = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    yearindexSer.allName().then(function(response){
        if(response.data.code == 0){
            $scope.nameData = response.data.data;
        }
    });
    yearindexSer.allType().then(function(response){
        if(response.data.code == 0){
            $scope.typeData = response.data.data;
        }
    });
    yearindexSer.allDimension().then(function(response){
        if(response.data.code == 0){
            $scope.dimeData = response.data.data;
        }
    });
    //添加
    $scope.workersAddFun = function(){
        var obj = {
            year:$scope.year,
            indexName:$scope.indexName,
            indexType:$scope.indexType,
            dimension:$scope.dimension,
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val(),
        };
        window.open(`/yearindex/exportFile${encode(obj,true)}`);
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


