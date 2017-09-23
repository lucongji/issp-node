var app = angular.module('setting', [{
    files:[
        "root/checkin/setting/_res/js/service.js"
    ]
}]);
app.controller('settingCtrl',function ($scope,$state) {

    if ($state.current.url == '/setting') {//默认加载列表
        $state.go('root.checkin.setting.list[12]')
    }

}).controller('settingMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]'){
            $scope.menuClass = 'listMenu';
        }
    });

    $scope.$on('getId',function(event,id){
        $scope.editId=id;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.list = function(){
        $state.go('root.checkin.setting.list[12]');
        $scope.menuClass = 'listMenu'
    };
    $scope.edit = function(){
        if($scope.editId){
            $state.go('root.checkin.setting.edit[12]',{id:$scope.editId,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    }
});



