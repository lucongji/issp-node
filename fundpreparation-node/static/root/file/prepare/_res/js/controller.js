var app = angular.module('prepare', [{
    files:[
        "root/file/prepare/_res/js/service.js"
    ]
}]);
app.controller('prepareCtrl',function ($scope,$state) {
    if ($state.current.url == '/prepare') {//默认加载列表
        $state.go('root.file.prepare.list[12]');
    }
}).controller('prepareMenuCtrl',function($scope,$state,$rootScope,$location,prepareSer){
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
        prepareSer.menuPermission(buttonName).then(function(response){
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
    //监听到父Ctrl后改变事件
    $scope.$on("socialListId", function(event, subId){
        $scope.idSocialList = subId;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = '';
        $scope.idSocialList = ''
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idList = '';
        $scope.idSocialList = ''
    };
    $scope.weekCollect = function(){
        $scope.menuClass = 'weekCollectMenu';
        $scope.idList = '';
        $scope.idSocialList = ''
    };
    $scope.monthCollect = function(){
        $scope.menuClass = 'monthCollectMenu';
        $scope.idList = '';
        $scope.idSocialList = ''
    };
    $scope.yearCollect = function(){
        $scope.menuClass = 'yearCollectMenu';
        $scope.idList = '';
        $scope.idSocialList = ''
    };
    $scope.projectCollect = function(){
        $scope.menuClass = 'projectCollectMenu';
        $scope.idList = '';
        $scope.idSocialList = ''
    };
    $scope.analysisCollect = function(){
        $scope.menuClass = 'analysisCollectMenu';
        $scope.idList = '';
        $scope.idSocialList = ''
    };
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.file.prepare.list[12]',{id:$scope.idList,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.file.prepare.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.detail = function(){
        if($scope.idList){
            $state.go('root.file.prepare.detail[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'detailMenu'
        }
    };
    $scope.editdetail = function(){
        if($scope.idSocialList){
            $state.go('root.file.prepare.editdetail[12]',{subId:$scope.idSocialList,id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editdetailMenu'
        }
    }
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
        }
        return result;
    }
});

