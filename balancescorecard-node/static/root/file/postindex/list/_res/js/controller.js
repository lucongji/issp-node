var app = angular.module('postindexList', ['ng-pagination','toastr']);
app.controller('postindexListCtrl',function($scope,postindexSer,toastr,$stateParams,$state,$location) {
    $scope.$emit('changeId', null);
    //获取所有年份
    postindexSer.allYears().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //指标类型
    postindexSer.allName().then(function(response){
        if(response.data.code == 0){
            $scope.nameData = response.data.data;
        }
    });
    //监听切换搜索是否出现
    $scope.$on('isSearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){
        $scope.delShow = false;
        $state.go('root.file.postindex.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){
        var data = {
            id:$stateParams.id
        };
        postindexSer.deleteContent(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.abili.itemsCount-count)%10){
                    $state.go('root.file.postindex.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.file.postindex.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //搜索
    if($stateParams.positioner){$scope.positioner = $stateParams.positioner;$scope.isView = false;}
    if($stateParams.year){$scope.year = $stateParams.year;$scope.isView = false;}
    if($stateParams.month){$scope.month = $stateParams.month;$scope.isView = false;}
    if($stateParams.indexName){$scope.indexName = $stateParams.indexName;$scope.isView = false;}
    //点击搜索功能
    $scope.search = function(){
        $state.go('root.file.postindex.list[12]',{
            indexName:$scope.indexName,
            year:$scope.year,
            positioner:$scope.positioner,
            month:$scope.month,
            page:1
        });
    };
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.basicLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
        $scope.$emit('page',$location.search().page);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.basicLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    function activatePage(page) {
        var listData = {
            page:page||1,
            month:$scope.month || '',
            year:$scope.year || '',
            indexName:$scope.indexName || '',
            positioner:$scope.positioner || '',
        };
        postindexSer.countContent(listData).then(function(response){
            if(response.data.code==0){
                $scope.abili.itemsCount = response.data.data;
                $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
        postindexSer.listContent(listData).then(function(response){
            if(response.data.code==0) {
                $scope.basicLists = response.data;
                if ($stateParams.id) {
                    if ($stateParams.id.indexOf('&')) {
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.basicLists.data, function (obj) {
                        if (obj.id == $stateParams.id.split('&')[0]) {
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    $scope.titles = ['指标名称','年份','月份','责任人'];
});
//自定义过滤器
app.filter('cover4', function(){
    return function(val){
        var result;
        switch(val){
            case "NONE":
                result = "未分解";
                break;
            case "SEPERATE":
                result = "已分解";
                break;
            case "YEAR":
                result = "年度分解";
                break;
            case "DEPARTYEAR":
                result = "部门年度分解";
                break;
            case "DEPARTMONTH":
                result = "部门月度分解";
                break;
            case "FILL":
                result = "手填";
                break;
        }
        return result;
    }
});