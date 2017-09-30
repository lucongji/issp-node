var app = angular.module('areaWeek', [{
    files:[
        "root/budget/areaWeek/_res/js/service.js"
    ]
}]);
app.controller('areaWeekCtrl',function ($scope,$state) {

    if ($state.current.url == '/areaWeek') {//默认加载列表
        $state.go('root.budget.areaWeek.list[12]')
    }

}).controller('areaWeekMenuCtrl',function($scope,$state,$rootScope,$location,areaWeekSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idList = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        areaWeekSer.menuPermission(buttonName).then(function(response){
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
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.budget.areaWeek.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass='editMenu';
        }
    };
    //删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.budget.areaWeek.list[12]',{id:$scope.idList,name:'delete',page:$scope.page});
            $scope.menuClass='deleteMenu';
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = ''
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idList = ''
    };
    $scope.collect3 = function(){
        $scope.menuClass = 'collect3Menu';
        $scope.idList = ''
    };
});

//自定义过滤器
app.filter('cover',function(){
    return function(val){
        var result;
        switch(val){
            case "LIST":
                result = "查看或列表";
                break;
            case "ADD":
                result = "添加";
                break;
            case "EDIT":
                result = "编辑";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "COLLECT":
                result = "汇总";
                break;
        }
        return result;
    }
});
