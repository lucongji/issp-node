var app = angular.module('bonus', [{
    files: ['root/bonus/_res/js/service.js']
}]);
app.controller('bonusCtrl', function ($scope,$state) {
    if ($state.current.url == '/bonus') {//默认加载列表
         $state.go('root.bonus.ready');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location,basicSer){
    $scope.navCla='ready';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'ready';
    $scope.navClass= function(name){
        $scope.navCla=name;
        $scope.$emit('isId',true);//每次切换页面更新搜索值
    };
    // 前面下拉导航权限
    basicSer.navPermission().then(function(response){
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
    basicSer.setPermission().then(function(response){
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
        {id:"1",item:"奖金资金准备",menuList:[{name:'奖金准备',msg:'ready'}],showIs:true},
        {id:"2",item:"资金支付",menuList:[{name2:'等待支付',msg:'wait'},{name3:'已支付',msg:'already'}],showIs:true},
        {id:"3",item:"设置",menuList:[{name4:'设置',msg:'setting'}],showIs:true},
    ];

    if(active){
        for(var i = 0; i < $scope.showsList.length; i++) {
            var n = $scope.showsList[i].menuList;
            for (var j = 0; j < n.length; j++) {
                var m = n[j].msg;
                if (m == active) {
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


