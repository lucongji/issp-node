var app = angular.module('staffInformsList', ['ng-pagination','toastr']);
app.controller('staffInformsListCtrl',function($scope,staffSer,toastr,$stateParams,$state,$location) {
    $scope.$emit('changeId', null);
   //选择
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.messageLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    function activatePage(page) {
        var listData = {
            page:page||1
        };
        staffSer.listStaff(listData).then(function(response){
            if(response.data.code==0) {
                $scope.messageLists = response.data;
                if ($stateParams.id) {
                    if ($stateParams.id.indexOf('&')) {
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.messageLists.data, function (obj) {
                        if (obj.id == $stateParams.id.split('&')[0]) {
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    staffSer.countStaff().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});
