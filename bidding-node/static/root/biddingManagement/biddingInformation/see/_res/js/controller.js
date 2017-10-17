var app = angular.module('seeinfo', ['ng-pagination','toastr']);
app.controller('seeinfoCtrl',function($scope,infoSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    $scope.seeInfo = function(val){
        $scope.custom.activatePage(1,val);
    };
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //获取搜索字段
    $scope.title = $stateParams.title?$stateParams.title:'';
    $scope.startTime = $stateParams.startTime?$stateParams.startTime:'';
    $scope.endTime = $stateParams.endTime?$stateParams.endTime:'';
    if($stateParams.title || $stateParams.startTime|| $stateParams.endTime){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    //搜索
    $scope.collect = function(val){
        $scope.custom.activatePage(1,val);
    }
    function activatePage(page,status) {
        $scope.startTime = angular.element('.startTime').val();
        $scope.endTime = angular.element('.endTime').val();
        var data = {
                page: page || 1,
                title: $scope.title || '',
                startTime: $scope.startTime || '',
                endTime: $scope.endTime || '',
            };
        switch(status){
            case "ZGJW":
                //获取中国警务招标网获取信息
                infoSer.getcaigouInfo(data).then(function(response){
                    if(response.data.code==0){
                        $scope.caigouInfo= response.data.data;
                    }else{
                        toastr.error(response.data.msg, '温馨提示');
                    }
                });
                // 总条数
                infoSer.getcaigouTotal().then(function(response){
                    if(response.data.code==0){
                        $scope.custom.itemsCount = response.data.data;
                        $scope.num = $location.search().page*20>20?($location.search().page-1)*20:null;
                    }else{
                        toastr.error( response.data.msg, '温馨提示');
                    }
                })
                break;
            case "ZGYD":
                //获取中国移动采购与招标网获取网址内的信息
                infoSer.getyidongInfo().then(function(response){
                    if(response.data.code==0){
                        $scope.caigouInfo = response.data.data;
                    }else{
                        toastr.error(response.data.msg, '温馨提示');
                    }
                });
                infoSer.getyidongTotal(data).then(function(response){
                    if(response.data.code==0){
                        $scope.custom.itemsCount = response.data.data;
                        $scope.num = $location.search().page*20>20?($location.search().page-1)*20:null;
                    }else{
                        toastr.error( response.data.msg, '温馨提示');
                    }
                });
                break;
            case "ZYZF":
                //获取中央政府采购网获取信息
                infoSer.getzycgInfo().then(function(response){
                    if(response.data.code==0){
                        $scope.caigouInfo = response.data.data;
                    }else{
                        toastr.error(response.data.msg, '温馨提示');
                    }
                });
                infoSer.getzycgTotal(data).then(function(response){
                    if(response.data.code==0){
                        $scope.custom.itemsCount = response.data.data;
                        $scope.num = $location.search().page*20>20?($location.search().page-1)*20:null;
                    }else{
                        toastr.error( response.data.msg, '温馨提示');
                    }
                });
                break;
            case "GXB":
                //获取工信部招标网获取信息
                infoSer.gettxzbInfo().then(function(response){
                    if(response.data.code==0){
                        $scope.caigouInfo = response.data.data;
                    }else{
                        toastr.error(response.data.msg, '温馨提示');
                    }
                });
                infoSer.gettxzbTotal(data).then(function(response){
                    if(response.data.code==0){
                        $scope.custom.itemsCount = response.data.data;
                        $scope.num = $location.search().page*11>11?($location.search().page-1)*11:null;
                    }else{
                        toastr.error( response.data.msg, '温馨提示');
                    }
                });
                break;
            case "ZGDL":
                //获取中国电力工程招标网获取信息
                infoSer.gettoobiaoInfo().then(function(response){
                    if(response.data.code==0){
                        $scope.caigouInfo = response.data.data;
                    }else{
                        toastr.error(response.data.msg, '温馨提示');
                    }
                });
                infoSer.gettoobiaoTotal(data).then(function(response){
                    if(response.data.code==0){
                        $scope.custom.itemsCount = response.data.data;
                        $scope.num = $location.search().page*23>23?($location.search().page-1)*23:null;
                    }else{
                        toastr.error( response.data.msg, '温馨提示');
                    }
                });
                break;
        }










    }
    // 搜索功能字段
    $scope.titles = ['标题','开始时间','结束时间'];
    $scope.selectList = function(event){
        angular.forEach($scope.caigouInfo,function(obj){
                obj._selectList = false
        });
        angular.forEach($scope.yidongInfo,function(obj){
            obj._selectList = false
        });
        angular.forEach($scope.zycgInfo,function(obj){
            obj._selectList = false
        });
        angular.forEach($scope.txzbInfo,function(obj){
            obj._selectList = false
        });
        angular.forEach($scope.toobiaoInfo,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page',$location.search().page);
    };


//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
});

