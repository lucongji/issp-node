var app = angular.module('positive', [{
    files:[
        "root/people/positive/_res/js/service.js",
    ]
}]);
app.controller('positCtrl',function ($scope,$state) {
    if ($state.current.url == '/positive') {//默认加载列表
        $state.go('root.people.positive.list[12]')
    }
    $scope.$emit('isVi',false);//判断是否出现搜索按钮
}).controller('positMenuCtrl',function($scope,$state,$rootScope,$location,positSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    //新增
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){
            $scope.menuClass =$location.search().name + 'Menu';
        }
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        positSer.positPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
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
    $scope.follow = function(){
        if($scope.idListd){
            $state.go('root.people.positive.follow[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'followMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    //------------------------------
    $scope.welfare = function(){
        if($scope.idListd){
            $state.go('root.people.positive.welfare[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'welfareMenu'
        }
    };
    $scope.planning = function(){
        if($scope.idListd){
            $state.go('root.people.positive.planning[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'planningMenu'
        }
    };
    $scope.budget = function(){
        if($scope.idListd){
            $state.go('root.people.positive.budget[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'budgetMenu'
        }
    };
    $scope.module = function(){
        if($scope.idListd){
            $state.go('root.people.positive.module[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'moduleMenu'
        }
    };
    $scope.projects = function(){
        if($scope.idListd){
            $state.go('root.people.positive.projects[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'projectsMenu'
        }
    };
    $scope.manager = function(){
        if($scope.idListd){
            $state.go('root.people.positive.manager[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'managerMenu'
        }
    };
    $scope.interview = function(){
        if($scope.idListd){
            $state.go('root.people.positive.interview[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'interviewMenu'
        }
    };
    /*positSer.positPermission().then(function(response){
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });*/
});

//自定义过滤
app.filter('follow', function(){
    return function (val) {
        var result;
        switch(val){
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
            case "TOFOLLOW":
                result = "待跟进";
                break;
            case "HAVEFOLLOW":
                result = "已跟进";
                break;
            case "NOTFOLLOW":
                result = "未跟进";
                break;
            case "NONE":
                result = "无";
                break;
            case "MAN":
                result = "男";
                break;
            case "WOMAN":
                result = "女";
                break;
            case "PROBATION":
                result = "试用期";
                break;
            case "POSITIVE":
                result = "转正中";
                break;
            case "NOPASS":
                result = "转正不通过";
                break;
            case "BECOMEMEM":
                result = "已转正";
                break;
            case "STAYPOSITIVE":
                result = "待转正";
                break;
        }
        return result;
    }
});
