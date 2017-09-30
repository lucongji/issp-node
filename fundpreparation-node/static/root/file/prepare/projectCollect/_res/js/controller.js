var app = angular.module('prepareproject', ['toastr']);
app.controller('prepareprojectCtrl', function($scope, prepareSer,$state,toastr){
    prepareSer.collectProject().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});

angular.module('common', []).filter('unique', function () {
    return function (collection, keyname) {
        var output = [],
            keys = [];
        angular.forEach(collection, function (item) {
            var key = item[keyname];
            if (keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });
        return output;
    }
});









