var app = angular.module('libraryindex', [{
    files:[
        "root/file/libraryindex/_res/js/service.js"
    ]
}]);
app.controller('libraryindexCtrl',function ($scope,$state) {
    if ($state.current.url == '/libraryindex') {//默认加载列表
        $state.go('root.file.libraryindex.list[12]');
    }
    $scope.$emit('isVi',false);//判断是否出现搜索按钮
}).controller('libraryindexMenuCtrl',function($scope,$state,$rootScope,$location,libraryindexSer){
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
        libraryindexSer.menuPermission(buttonName).then(function(response){
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
        $scope.idList = '';
    };
    $scope.export = function(){
        $scope.menuClass = 'exportMenu';
        $scope.idList = '';
    };
    $scope.departExport = function(){
        $scope.menuClass = 'departExportMenu';
        $scope.idList = '';
    };
    $scope.departMonExport = function(){
        $scope.menuClass = 'departMonExportMenu';
        $scope.idList = '';
    };
    $scope.departPosExport = function(){
        $scope.menuClass = 'departPosExportMenu';
        $scope.idList = '';
    };
    $scope.departPerExport = function(){
        $scope.menuClass = 'departPerExportMenu';
        $scope.idList = '';
    };
    $scope.departDimExport = function(){
        $scope.menuClass = 'departDimExportMenu';
        $scope.idList = '';
    };
    $scope.departTypeExport = function(){
        $scope.menuClass = 'departTypeExportMenu';
        $scope.idList = '';
    };
});

