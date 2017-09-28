var app = angular.module('prepareEdit', ['toastr']);
app.controller('prepareEditCtrl', function($scope, prepareSer,$state,toastr,$stateParams){
    prepareSer.firstSub().then(function(response){
        if(response.data.code == 0){
            $scope.pronames = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    prepareSer.secondSub().then(function(response){
        if(response.data.code == 0){
            $scope.pronames2 = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    var basicId={
        id:$stateParams.id
    };
    //获取值
    prepareSer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
            var o = {times:'class0'};
            for(key in $scope.data){
                o[key] = $scope.data[key];
            }
            $scope.rationdate.push(o);
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.fundPrepareTOList = [];
    $scope.rationdate = [];
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
    $scope.basicEditFun = function(){
        var vm = $scope;
        var data = {};
        for(var i = 0;i<$scope.rationdate.length;i++){
            var o = $scope.rationdate[i];
            data['fundPrepareTOList['+i + ']' + '.firstSubject'] = o.firstSubject;
            data['fundPrepareTOList['+i + ']' + '.secondSubject'] = o.secondSubject;
            data['fundPrepareTOList['+i + ']' + '.fund'] = o.fund;
            data['fundPrepareTOList['+i + ']' + '.time'] = angular.element("."+o.times).val();
        }
        prepareSer.addContent(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.prepare.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});