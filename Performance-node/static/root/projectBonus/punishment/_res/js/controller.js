var app = angular.module('punishment', [{
    files:[
        "root/projectBonus/punishment/_res/js/service.js"
    ]
}]);
app.controller('punishmentCtrl',function ($scope,$state) {
    if ($state.current.url == '/punishment') {
        $state.go('root.projectBonus.punishment.list');
    }
}).controller('punishmentMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
        $scope.idList = id;
    });

    $scope.$on("onSearch", function(event, name){
        $scope.onSearch = name;
    });
    

    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.projectBonus.punishment.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.projectBonus.punishment.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.summary = function(){
        $scope.menuClass = 'summaryMenu'
    };
    $scope.summaryReward = function(){
        $scope.menuClass = 'summaryRewardMenu'
    };
    $scope.summaryNumber = function(){
        $scope.menuClass = 'summaryNumberMenu'
    };
    $scope.summaryScore = function(){
        $scope.menuClass = 'summaryScoreMenu'
    };
});