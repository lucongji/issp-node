var app = angular.module('collect', [{
    files:[
        "root/biddingManagement/collect/_res/js/service.js",
    ]
}]);
app.controller('collectCtrl',function ($scope,$state) {
    if ($state.current.url == '/collect') {//默认加载列表
        $state.go('root.biddingManagement.collect.summaryOperation[12]')
    }
    $scope.$emit('isVi',false);//判断是否出现搜索按钮
}).controller('collectMenuCtrl',function($scope,$state,$rootScope,$location,collectSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='summaryOperation[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'summaryOperationMenu';
        }
    });
    //新增
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){
            $scope.menuClass =$location.search().name + 'Menu';
        }
    }
    // $scope.menuCheck = function (name) {
    //     var buttonName = name;
    //     $scope.buttonShow = true;
    //     collectSer.collectPermission(buttonName).then(function(response){
    //         if(response.data.code == 0 && response.data.data){
    //             $scope[buttonName] = true;
    //         }else{
    //             $scope[buttonName] = false;
    //         }
    //     });
    //     $scope.menuAdd = false;
    // };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });

    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page =$location.search().page;
    }
    $scope.summaryOperation = function(){
        $scope.menuClass = 'summaryOperationMenu'
    };
    $scope.summaryDay = function(){
        $scope.menuClass = 'summaryDayMenu'
    };
    $scope.summaryWeek = function(){
        $scope.menuClass = 'summaryWeekMenu'
    };
    $scope.summaryMonth = function(){
        $scope.menuClass = 'summaryMonthMenu'
    };
    $scope.summaryTotal = function(){
        $scope.menuClass = 'summaryTotalMenu'
    };
});

//自定义过滤
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val){
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }
});
