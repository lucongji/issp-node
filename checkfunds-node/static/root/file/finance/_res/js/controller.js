var app = angular.module('finance', [{
    files:[
        "root/file/finance/_res/js/service.js"
    ]
}]);
app.controller('financeCtrl',function ($scope,$state) {
    if ($state.current.url == '/finance') {//默认加载列表
        $state.go('root.file.finance.collect[12]');
    }
}).controller('financeMenuCtrl',function($scope,$state,$rootScope,$location,financeSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='collect[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'collectMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idList = window.location.href.split('id=')[1];
        if($location.search().name){
            $scope.menuClass = $location.search().name + 'Menu';
        }
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        financeSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
        $scope.idList = id;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.collect = function(){
        $scope.menuClass = 'collectMenu';
        $scope.idList = ''
    };
});
//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "COLLECT":
                result = "汇总";
                break;
        }
        return result;
    }

})

