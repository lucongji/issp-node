var app = angular.module('file', [{
    files: ['root/file/_res/js/service.js']
}]);
app.controller('fileCtrl', function ($scope,$state) {
    if ($state.current.url == '/file') {//默认加载列表
         $state.go('root.file.apply');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location,fileSer){
    $scope.navCla='apply';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'apply';
    $scope.navClass= function(name){
        $scope.navCla=name;
    };
  // 前面下拉导航权限
    fileSer.navPermission().then(function(response){
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
    fileSer.setPermission().then(function(response){
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
        {id:"1",item:"吸收资金",menuList:[
            {name:'资金进入申请',msg:'apply'},
            {name2:'有误记录',msg:'record'},
            {name3:'已确认',msg:'sure'}
            ,{name4:'权责分配',msg:'respons'}
        ],showIs:false},
        {id:"2",item:"资金投资",menuList:[
            {name5:'招投信息列表',msg:'inform'},
            {name6:'投资形式',msg:'investForm'},
            {name7:'投资条件-债权投资',msg:'creditor'},
            {name8:'投资条件-股权投资',msg:'stock'},
            {name9:'投资条件-现金投资',msg:'cash'},
            {name10:'资金投资',msg:'investment'},
            {name11:'投资转让',msg:'transfer'},
        ],showIs:false},
        {id:"3",item:"资金分配",menuList:[
            {name12:'收益分配比例',msg:'profit'},
            {name13:'收益分配额',msg:'allotment'},
        ],showIs:false},
        {id:"4",item:"资金退出",menuList:[
            {name14:'资金退出申请表',msg:'sign'},
            {name15:'资金退出申请有误记录',msg:'records'},
            {name16:'资金退出申请确认表',msg:'recordss'},
        ],showIs:false},
        {id:"5",item:"客户信息管理",menuList:[
            {name17:'客户信息',msg:'custom'},
            {name18:'客户信息汇总',msg:'customSum'},
        ],showIs:false},
        {id:"6",item:"设置",menuList:[{name19:'设置',msg:'setting'}],showIs:false},
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


