var app = angular.module('preparemonth', ['toastr']);
app.controller('preparemonthCtrl', function($scope, prepareSer,$state,toastr){
    prepareSer.collectMonth().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //选择
    $scope.selectList = function(event){
        angular.forEach($scope.summaryLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
});











