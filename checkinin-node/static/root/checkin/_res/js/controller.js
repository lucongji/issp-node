var app = angular.module('checkinModel', [{
    files: ['root/checkin/_res/js/service.js']
}]);
app.controller('checkinCtrl', function ($scope,$state) {
    if ($state.current.url == '/checkin') {//默认加载列表
        $state.go('root.checkin.stayApply');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location,checkinSer){
    $scope.navCla='stayApply';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'stayApply';
    $scope.navClass = function(name){
        $scope.navCla = name;
        $scope.$emit('isId',true);//每次切换页面更新搜索值
    };
    // 前面下拉导航权限
    checkinSer.navPermission().then(function(response){
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
    });
    // 设置导航权限
    checkinSer.setPermission().then(function(response){
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
    });
    $scope.showsList = [
        {id:"1",item:"入住离宿登记",menuList:[{name1:"住宿申请",msg:'stayApply'},{name2:"离宿申请",msg:'departureRequest'},{name3:"员工住宿天数汇总",msg:'daySummary'},{name4:"宿舍信息管理",msg:'infoManage'},{name5:'设置',msg:'setting'}],showIs:false}
    ];
    $scope.listUl = false
    $scope.listShow = function () {
        if ($scope.listUl) {
            $scope.listUl = false
            $scope.listLi = false;
            $scope.seShow=false
        } else {
            $scope.listUl = true;
        }
    }
    $scope.listLi = false;
    $scope.listUlShow = function () {
        if ($scope.listLi) {
            $scope.listLi = false;
        }else{
            $scope.listLi = true;
        }
    }
    $scope.seShow=false
    $scope.listSeShow=function () {
     if($scope.seShow) {
         $scope.seShow=false
     } else {
         $scope.seShow=true;
     }
    }
    console.log('222')
    angular.element('.bagl li').click(function () {
        angular.element('.bagl li').css('background',"#071a30")
        angular.element(this).css('background',"#33658e")
        console.log(111);
    })

    angular.element('.bagl').click(function () {
        // angular.element('.bagl li').css('background',"#071a30")
        // angular.element(this).css('background',"#33658e")
        console.log(222);
    })
    if(active){
        for(var i = 0; i < $scope.showsList.length; i++){
            var n = $scope.showsList[i].menuList;
            for(var j = 0; j < n.length; j++){
                var m = n[j].msg;
                if(m == active){
                    $scope.showsList[i].showIs = true;
                    break;
                }
            }
        }
    }
    $scope.showMenu = function(obj,event) {
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
                this.showsList.forEach(function(item){
                    if(item.id!=obj.id){
                        item.showIs=!event;
                    }else{
                        item.showIs=event;
                    }
                });
            }
        }
    };
});
//绑定的数据出现很多显示不完全的时候,后面加小数点显示,之后双击可以显示完全部内容
app.directive('mod',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.hover(function(){
                var textWidth = elements.text().length*12;
                var boxWidth = elements.width();

                if(textWidth>boxWidth){
                    elements.addClass('modac');
                }
            });
            elements.dblclick(function(){
                if(elements.hasClass('modac')){
                    $('.module').show();
                    var Index =  elements.index(),
                        title,
                        tag = this.tagName;
                    if(tag=="P"){
                        title =  $(".list-head span").eq(Index).text();
                    }else if(tag=="SPAN"){
                        title = $(this).parent().siblings('.see-parent').children().eq(Index).text();
                    }
                    var conText = elements.text();
                    $('.see-type').text(title);
                    $('.see-description').text(conText)
                }
            })
        }
    }
}).directive('modclose',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.on("click",function(){
                $('.module').hide();
            });

        }
    }
});
//自定义过滤器
app.filter('cover',function(){
    return function(val){
        var result;
        switch(val){
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
            case 'PASS':
                result = "通过";
                break;
            case 'NOTPASS':
                result = "不通过";
                break;
            case "LEVEL":
                result = "层级";
                break;
            case "MODULE":
                result = "模块";
                break;
            case "POSITION":
                result = "岗位";
                break;
            case "DEPART":
                result = "部门";
                break;
        }
        return result;
    }

});

