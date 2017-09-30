var app = angular.module('prepareAdd', ['toastr']);
app.controller('prepareAddCtrl', function($scope, prepareSer,$state,toastr){
    $scope.list={};
    prepareSer.firstSub().then(function(response){
        if(response.data.code == 0){
            $scope.pronames = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.myFun = function(){
        var data={
            firstSubject
        }
        prepareSer.secondSub($scope.firstSubject).then(function(response){
            console.log($scope.firstSubject);
            if(response.data.code == 0){
                $scope.firstSub2 = response.data.data
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

  /*  $scope.myFun = function() {
        var data={firstSubject:$scope.list.firstSubject};
        prepareSer.secondSub(data).then(function(response){
            if(response.data.code == 0){
                $scope.list2 = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };*/
    $scope.fundPrepareTOList = [];
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











