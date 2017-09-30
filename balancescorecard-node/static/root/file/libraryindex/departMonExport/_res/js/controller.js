var app = angular.module('libraryMonthExport', ['toastr']);
app.controller('libraryMonthExportCtrl', function($scope,libraryindexSer){
    libraryindexSer.allDepartments().then(function(response){
        if(response.data.code==0){
            $scope.allNames = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.workersAddFun = function(){
        var obj = {
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val(),
            depart:$scope.depart
        };
        window.open(`/departMonExport/exportFile${encode(obj,true)}`);
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


