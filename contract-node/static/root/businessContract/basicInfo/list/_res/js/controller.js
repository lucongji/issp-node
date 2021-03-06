var app = angular.module('basicInfoList', ['ng-pagination','toastr']);
app.controller('basicListCtrl',function($scope,basicSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('isSearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //搜索字段
    if($stateParams.inner){$scope.innerProject = $stateParams.innerProject;$scope.isView = false;}
    if($stateParams.outNum){$scope.outProjectNum = $stateParams.outNum;$scope.isView = false;}
    if($stateParams.saleNum){$scope.saleContractNum = $stateParams.saleNum;$scope.isView = false;}
    if($stateParams.type){$scope.businessType = $stateParams.type;$scope.isView = false;}
    if($stateParams.subject){$scope.businessSubject = $stateParams.subject;$scope.isView = false;}
    if($stateParams.cooperate){$scope.businessCooperate = $stateParams.cooperate;$scope.isView = false;}
    if($stateParams.first){$scope.firstCompany = $stateParams.first;$scope.isView = false;}
    if($stateParams.second){$scope.secondCompany = $stateParams.second;$scope.isView = false;}
    if($stateParams.area){$scope.area = $stateParams.area;$scope.isView = false;}
    if($stateParams.property){$scope.contractProperty = $stateParams.property;$scope.isView = false;}
    if($stateParams.payWays){$scope.payWays = $stateParams.payWays;$scope.isView = false;}
    if($stateParams.customerName){$scope.customerName = $stateParams.customerName;$scope.isView = false;}
    if($stateParams.siginYear){$scope.siginYear = $stateParams.siginYear;$scope.isView = false;}
    if($stateParams.fileCondition){$scope.fileCondition = $stateParams.fileCondition;$scope.isView = false;}
    //点击搜索功能
    $scope.search = function(){
        $state.go('root.businessContract.basicInfo.list[12]',{
            inner:$scope.innerProject,outNum:$scope.outProjectNum,saleNum:$scope.saleContractNum,type:$scope.businessType,
            subject:$scope.businessSubject,cooperate:$scope.businessCooperate,first:$scope.firstCompany,second:$scope.secondCompany,
            area:$scope.area,property:$scope.contractProperty,payWays:$scope.payWays,customerName:$scope.customerName,
            siginYear:$scope.siginYear,fileCondition:$scope.fileCondition,page:1
        });
    };
    function activatePage(page) {
        var listData = {
            page:page || 1,
            innerProject:$scope.innerProject || '',
            outProjectNum:$scope.outProjectNum || '',
            saleContractNum:$scope.saleContractNum || '',
            businessType:$scope.businessType || '',
            businessSubject:$scope.businessSubject || '',
            businessCooperate:$scope.businessCooperate || '',
            firstCompany:$scope.firstCompany || '',
            secondCompany:$scope.secondCompany || '',
            area:$scope.area || '',
            contractProperty:$scope.contractProperty || '',
            payWays:$scope.payWays || '',
            customerName:$scope.customerName || '',
            siginYear:$scope.siginYear || '',
            fileCondition:$scope.fileCondition || ''
        };
        basicSer.countBasicInfo().then(function(response){
            if(response.data.code==0){
                $scope.custom.itemsCount = response.data.data;
                $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
        basicSer.basicInfoList(listData).then(function(response){
            if(response.data.code==0){
                $scope.basicLists = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.basicLists,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    }
    // 搜索功能字段
    $scope.titles = ['内部项目名称','合同外部编号','对应销售合同号','业务类型','业务方向科目','合作方式','甲方公司名称','乙方公司名称','地区','合同属性','支付方式','客户名称','签订年份','合同是否已归档'];
    $scope.selectList = function(event){
        angular.forEach($scope.basicLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page', $location.search().page);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.basicLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.businessContract.basicInfo.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        basicSer.deleteBasicInfo(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.businessContract.basicInfo.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.businessContract.basicInfo.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});

