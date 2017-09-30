var app = angular.module('monthEdit', ['toastr']);
app.controller('monthEditCtrl', function($scope, departindexSer,$stateParams,$state,toastr){
    $scope.departMonSerperateTOList = [];
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
    var basicData ={id: $stateParams.id};
    //获取ID
    departindexSer.getOneById(basicData).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
            var o = {times:'class0'};
            for(key in $scope.data){
                o[key] = $scope.data[key];
            }
            $scope.rationdate.push(o);
            $scope.id = $scope.data.id;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        var data = {};
        for(var i = 0;i<$scope.rationdate.length;i++){
            var o = $scope.rationdate[i];
            data['departMonSerperateTOList['+i + ']' + '.monthValue'] = o.monthValue;
            data['departMonSerperateTOList['+i + ']' + '.target'] = o.target;
            data['departMonSerperateTOList['+i + ']' + '.serparateTarget'] = o.serparateTarget;
            data['id'] = $scope.rationdate[0].id;
        }
        departindexSer.editMonthSelf(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.departindex.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





