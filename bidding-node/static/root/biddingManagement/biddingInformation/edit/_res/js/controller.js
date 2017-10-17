var app = angular.module('infoEdit', ['toastr','angularjs-dropdown-multiselect']);
app.controller('infoEditCtrl', function($scope, infoSer,$stateParams,$state,toastr){
    $scope.showed=true
     $scope.tenderModule= [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.workOptions=["商务标","技术标","经济标"]
    $scope.monthOptions=["1","2","3","4","5","6","7","8","9","10","11","12"]
    $scope.getSummary ={onSelectionChanged(){
        $scope.tender = $scope.tenderModule.join(',');
    }};
    $scope.tags1=[{name:'1.1无线、有线工程督导'},{name:'1.2工程网优、日常网优'},{name:'1.3工程设计、规划'},{name:'1.4通信工程监理'},{name:'1.5无线优化专项'},{name:'1.6无线工程、无线网优日常代维'}];
    $scope.tags2=[{name:'2.1产品开发'},{name:'2.2产品定制'},{name:'2.3大数据、云处理'},{name:'2.4软件测试'}];
    $scope.tags3=[{name:'3.1智能楼宇、智能小区'},{name:'3.2物联网'},{name:'3.3物业管理'},{name:'3.4局域网'},{name:'3.5入网行为管理'}];
    $scope.tags4=[{name:'4.1单一方案提供'},{name:'4.2整体实施'}];
    $scope.onSelect=function(tag){
         $scope.editInfo.businessDirectionSubject=tag.name;
       }
    var infoData ={id: $stateParams.id};
    //获取ID
    infoSer.findInfoId(infoData).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;

        }else{
            toastr.error(response.data.msg, '温馨提示');
        }

    });
    //获取网站名称
    infoSer.websiteName().then(function(response){
        if(response.data.code==0){
            $scope.webNames = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取招投标类型
    infoSer.getbiddingType().then(function(response){
        if(response.data.code==0){
            $scope.biddingType = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取年份
    infoSer.getYear().then(function(response){

        if(response.data.code==0){
            $scope.year = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
        //获取网址
    $scope.changSelect = function(){
        var obj={webName:$scope.webName};
        infoSer.websiteUrl(obj).then(function(response){
            if(response.data.code == 0){
                $scope.url= response.data.data;
            }
        });
    };

    //编辑点击提交
    $scope.infoEditFun = function(){
        var vm = $scope;
        vm.editInfo.webName = angular.element('.webName').val();
        vm.editInfo.url = angular.element('.na').val();
        vm.editInfo.tenderModule = angular.element('.tender').val();
        // vm.editInfo.year = angular.element('.year').val();
        // vm.editInfo.month = angular.element('.month').val();

        vm.editInfo.registrationTime = angular.element('.registrationTime').val();
        vm.editInfo.biddingTime = angular.element('.biddingTime').val();
        vm.editInfo.buyTenderTime = angular.element('.buyTenderTime').val();
        vm.editInfo.marginTime = angular.element('.marginTime').val();
        vm.editInfo.backTimeDeposit = angular.element('.backTimeDeposit').val();
        vm.editInfo.updateTime = angular.element('.updateTime').val();

        infoSer.editInfo(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.biddingManagement.biddingInformation.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





