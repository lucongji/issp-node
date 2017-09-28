var app = angular.module('informEdit', ['toastr']);
app.controller('informEditCtrl', function($scope, informwSer,$state,toastr,$stateParams){
    informwSer.allInnerProject().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    $scope.myFunc = function(){
        var data={innerProject:$scope.proDatas};
        informwSer.listProject(data).then(function(response){
            if(response.data.code == 0){
                $scope.proData2 = response.data.data;
            }
        });
    };
    var basicId = {id : $stateParams.id};
    //获取值
    informwSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        var data={
            id:vm.editInfo.id,
            area:vm.proData2.area,
            innerProject:vm.proData2.innerProject,
            startProjectTime:vm.proData2.startProjectTime,
            endProjectTime:vm.proData2.endProjectTime,
            money:vm.proData2.money,
            projectCharge:vm.proData2.projectCharge,
            price:vm.editInfo.price,
            size:vm.editInfo.size,
            signedContract:vm.editInfo.signedContract,
            paybackPeriod:vm.editInfo.paybackPeriod,
            contractor:vm.editInfo.contractor,
            complexity:vm.editInfo.complexity,
            forecastProfitMargin:vm.editInfo.forecastProfitMargin,
            capitalAlloRate:vm.editInfo.capitalAlloRate,
            forecastReturnInvestment:vm.editInfo.forecastReturnInvestment,
            extractRiskRserveRatio:vm.editInfo.extractRiskRserveRatio,
            totalFund:vm.editInfo.totalFund,
            hasBeenRaised:vm.editInfo.hasBeenRaised,
            needTotalFund:vm.editInfo.needTotalFund,
            forecastArriveTime:angular.element('.forecastArriveTime').val(),
            forecastAllotTime:angular.element('.forecastAllotTime').val()
        };
        informwSer.editContent(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.inform.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});