var app = angular.module('informAdd', ['toastr']);
app.controller('informAddCtrl', function($scope, informwSer,$state,toastr){
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
    $scope.basicAddFun = function(){
        var vm = $scope;
        var data={
            area:vm.proData2.area,
            innerProject:vm.proData2.innerProject,
            startProjectTime:vm.proData2.startProjectTime,
            endProjectTime:vm.proData2.endProjectTime,
            money:vm.proData2.money,
            projectCharge:vm.proData2.projectCharge,
            price:vm.add.price,
            size:vm.add.size,
            signedContract:vm.add.signedContract,
            paybackPeriod:vm.add.paybackPeriod,
            contractor:vm.add.contractor,
            complexity:vm.add.complexity,
            forecastArriveTime:angular.element('.forecastArriveTime').val()
        };
         informwSer.addContent(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.inform.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





