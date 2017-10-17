var app = angular.module('openingInfoAdd', ['toastr']);
app.controller('openingAddCtrl', function ($scope, openingSer, $state, toastr) {
$scope.showed=true
    openingSer.biddingNumber().then(function(response){
        if(response.data.code == 0){
            $scope.biddingNumbers = response.data.data;
        }
    });
    $scope.monthOptions=["1","2","3","4","5","6","7","8","9","10","11","12"]
    $scope.tags1=[{name:'1.1无线、有线工程督导'},{name:'1.2工程网优、日常网优'},{name:'1.3工程设计、规划'},{name:'1.4通信工程监理'},{name:'1.5无线优化专项'},{name:'1.6无线工程、无线网优日常代维'}];
    $scope.tags2=[{name:'2.1产品开发'},{name:'2.2产品定制'},{name:'2.3大数据、云处理'},{name:'2.4软件测试'}];
    $scope.tags3=[{name:'3.1智能楼宇、智能小区'},{name:'3.2物联网'},{name:'3.3物业管理'},{name:'3.4局域网'},{name:'3.5入网行为管理'}];
    $scope.tags4=[{name:'4.1单一方案提供'},{name:'4.2整体实施'}];
    $scope.onSelect=function(tag){
        $scope.opening.businessDirectionSubject=tag.name;
    }
    $scope.changSelect = function(){
        var obj={biddingNumber:$scope.opening.biddingNumber};
        openingSer.getBiddingNum(obj).then(function(response){
            if(response.data.code == 0){
                $scope.projectNames = response.data.data;
            }
        });
    };
    //获取年份
    openingSer.getYear().then(function(response){

        if(response.data.code==0){
            $scope.year = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.openAddFun = function () {
        var vm = $scope;
        vm.opening.bidOpeningTime = angular.element('.bidOpeningTime').val();
        vm.opening.biddingNumber = angular.element('.num').val();
        vm.opening.projectName = angular.element('.na').val();
        vm.opening.updateTime = angular.element('.updateTime').val();
        vm.opening.backTimeDeposit = angular.element('.backTimeDeposit').val();
        openingSer.addBidOpening(vm.opening).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.biddingManagement.openingInfo.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




