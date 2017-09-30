var app = angular.module('postindex', [{
    files:[
        "root/file/postindex/_res/js/service.js"
    ]
}]);
app.controller('postindexCtrl',function ($scope,$state) {
    if ($state.current.url == '/postindex') {//默认加载列表
        $state.go('root.file.postindex.list[12]');
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('postindexMenuCtrl',function($scope,$state,$rootScope,$location,postindexSer){
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
        postindexSer.menuPermission(buttonName).then(function(response){
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
    $scope.theMonth = function(){
        $scope.menuClass = 'theMonthMenu';
        $scope.idList = '';
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idList = '';
    };
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.file.postindex.list[12]',{id:$scope.idList,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.file.postindex.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.import = function(){
        $scope.menuClass = 'importMenu';
        $scope.idList = ''
    };
    $scope.export = function(){
        $scope.menuClass = 'exportMenu';
        $scope.idList = ''
    };
});


