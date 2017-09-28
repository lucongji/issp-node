var app = angular.module('programme', [{
    files:[
        "root/file/programme/_res/js/service.js"
    ]
}]);
app.controller('programmeCtrl',function ($scope,$state) {
    if ($state.current.url == '/programme') {//默认加载列表
        $state.go('root.file.programme.list[12]');
    }
}).controller('programmeMenuCtrl',function($scope,$state,$rootScope,$location,programmeSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
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
        programmeSer.menuPermission(buttonName).then(function(response){
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
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = ''
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idList = ''
    };
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.file.programme.list[12]',{id:$scope.idList,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.file.programme.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
});
//自定义过滤器
app.filter('cover', function(){
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
            case "COVER":
                result = "覆盖";
                break;
            case "RESERVE":
                result = "保留";
                break;
            case "MURAL":
                result = "挂图、壁画";
                break;
            case "ACTIVITY":
                result = "员工活动";
                break;
            case "REWARD":
                result = "奖励评选";
                break;
            case "NOTDEAL":
                result = "未处理";
                break;
            case "PASS":
                result = "通过";
                break;
            case "REFUSE":
                result = "不通过";
                break;
        }
        return result;
    }
})

