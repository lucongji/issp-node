var app = angular.module('prepareDetail', ['ng-pagination','toastr']);
app.controller('prepareDetailCtrl',function($scope,prepareSer,toastr,$stateParams,$state) {
    var basicId={id:$stateParams.id};
    prepareSer.fundetail(basicId).then(function(response){
        if(response.data.code==0){
            $scope.rationdate = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    $scope.proportionTOList = [];
    $scope.rationdate = [{times:'class0'}];
    var flag = 0;
    $scope.addLine  = function () {
        flag++;
        var o = {};
        o.times = 'class' + flag;
        $scope.rationdate.push(o);
    };
    $scope.del = function (index) {
        $scope.rationdate.splice(index, 1);
    };
    $scope.basicAddFun = function(){
        var vm = $scope;
        var data = { };
        for(var i = 0;i<$scope.rationdate.length;i++){
            var o = $scope.rationdate[i];
            data['proportionTOList['+i + ']' + '.projectTeam'] = o.projectTeam;
            data['proportionTOList['+i + ']' + '.ratio'] = o.ratio;
            data['proportionTOList['+i + ']' + '.fund'] = o.eachFund;
            data['proportionTOList['+i + ']' + '.time'] = angular.element("."+o.times).val();
            data['proportionTOList['+i + ']' + '.id'] = o.id;
            data['fundId'] = o.fundId;
          }
        prepareSer.editDetailSelf(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.prepare.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});
