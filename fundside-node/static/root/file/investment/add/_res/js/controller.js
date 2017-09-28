var app = angular.module('investmentAdd', ['toastr']);
app.controller('investmentAddCtrl', function($scope, investmentSer,$state,toastr){
    investmentSer.allInnerProject().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    $scope.myFunc = function(){
        var data={innerProject:$scope.proDatas};
        investmentSer.listProject(data).then(function(response){
            if(response.data.code == 0){
                $scope.proData2 = response.data.data;
            }
        });
    };
    $scope.basicAddFun = function(){
        var vm = $scope;
        var data={
            innerProject:vm.proData2.innerProject,
            startProjectTime:vm.proData2.startProjectTime,
            endProjectTime:vm.proData2.endProjectTime,
            investor:vm.proData2.investor,
            investTotal:vm.proData2.investTotal,
            thisInvestMoney:vm.proData2.thisInvestMoney,
            investProportion:vm.proData2.investProportion,
            forecastArriveTime:vm.proData2.forecastArriveTime,
            accumulativeInvestMoney:vm.proData2.accumulativeInvestMoney,
            projectProgress:vm.add.projectProgress,
            settlementProgress:vm.add.settlementProgress,
            forecastArriveMoney:vm.add.forecastArriveMoney,
            arriveMoney:vm.add.arriveMoney,
            arriveTime:angular.element('.arriveTime').val()
        };
        investmentSer.addContent(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.investment.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





