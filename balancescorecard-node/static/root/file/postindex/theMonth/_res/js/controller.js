var app = angular.module('postindexThisMonth', ['ng-pagination','toastr']);
app.controller('postindexThisMonthCtrl',function($scope,postindexSer,toastr,$stateParams) {

    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.monthLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    function activatePage(page) {
        var listData2 = {
            page: page || 1,
        };
        postindexSer.allpostindexset(listData2).then(function (response) {
            if (response.data.code == 0) {
                $scope.monthLists = response.data.data;
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    postindexSer.allpostindexCount().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});
