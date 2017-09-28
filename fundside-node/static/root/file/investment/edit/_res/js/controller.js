var app = angular.module('investmentEdit', ['toastr']);
app.controller('investmentEditCtrl', function($scope, investmentSer,$state,toastr,$stateParams){
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
    var basicId = {id : $stateParams.id};
    //获取值
    investmentSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        var data={
            innerProject:vm.proData2.innerProject,
            startProjectTime:vm.proData2.startProjectTime,
            endProjectTime:vm.proData2.endProjectTime,
            investor:vm.proData2.investor,
            investTotal:vm.proData2.investTotal,
            thisInvestMoney:vm.proData2.thisInvestMoney,
            investProportion:vm.proData2.investProportion,
            accumulativeInvestMoney:vm.proData2.accumulativeInvestMoney,
            projectProgress:vm.editInfo.projectProgress,
            settlementProgress:vm.editInfo.settlementProgress,
            forecastArriveMoney:vm.editInfo.forecastArriveMoney,
            arriveMoney:vm.editInfo.arriveMoney,
            id:vm.editInfo.id,
            arriveTime:angular.element('.arriveTime').val()
        };
        investmentSer.editContent(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.investment.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});