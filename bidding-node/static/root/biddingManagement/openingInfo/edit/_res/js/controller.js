var app = angular.module('openingEdit', ['toastr']);
app.controller('openingEditCtrl', function($scope, openingSer,$stateParams,$state,toastr){
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
        var obj={biddingNumber:$scope.editOpening.biddingNumber};
        openingSer.getBiddingNum(obj).then(function(response){
            if(response.data.code == 0){
                $scope.projectNames = response.data.data;
            }
        });
    };
    var infoData ={id: $stateParams.id};
    //获取ID
    openingSer.findBidOpeningId(infoData).then(function(response){
        if(response.data.code== 0){
            $scope.editOpening = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //获取年份
    openingSer.getYear().then(function(response){

        if(response.data.code==0){
            $scope.year = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.openEditFun = function(){
        var vm = $scope;
        // vm.editOpening.year = angular.element('.year').val();
        // vm.editOpening.month = angular.element('.month').val();
        vm.editOpening.bidOpeningTime = angular.element('.bidOpeningTime').val();
        vm.editOpening.biddingNumber = angular.element('.num').val();
        vm.editOpening.projectName = angular.element('.na').val();
        vm.editOpening.updateTime = angular.element('.updateTime').val();
        vm.editOpening.backTimeDeposit = angular.element('.backTimeDeposit').val();
        openingSer.editBidOpening(vm.editOpening).then(function(response){
            if(response.data.code == 0){
                $state.go('root.biddingManagement.openingInfo.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





