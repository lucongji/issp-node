var app = angular.module('infoAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('infoAddCtrl', function ($scope, infoSer, $state, toastr) {
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
         $scope.information.businessDirectionSubject=tag.name;
       }
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
    $scope.changSelect = function(){
        var obj={webName:$scope.webName};
        infoSer.websiteUrl(obj).then(function(response){
            if(response.data.code == 0){
                $scope.url= response.data.data;
            }
        });
    };
    //添加
    $scope.infoAddFun = function () {
        var vm = $scope;
        vm.information.webName = angular.element('.webName').val();
        vm.information.url = angular.element('.na').val();
        vm.information.tenderModule = angular.element('.tender').val();

        vm.information.registrationStartTime = angular.element('.registrationStartTime').val();
        vm.information.registrationEndTime = angular.element('.registrationEndTime').val();
        vm.information.biddingTime = angular.element('.biddingTime').val();
        vm.information.buyTenderTime = angular.element('.buyTenderTime').val();
        vm.information.marginTime = angular.element('.marginTime').val();
        vm.information.backTimeDeposit = angular.element('.backTimeDeposit').val();
        vm.information.updateTime = angular.element('.updateTime').val();

        infoSer.addInfo(vm.information).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.biddingManagement.biddingInformation.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
        console.log(vm.information)
    };
});




