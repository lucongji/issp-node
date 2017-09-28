var app = angular.module('preeditdetail', ['toastr']);
app.controller('preeditdetailCtrl', function($scope, prepareSer,$state,toastr,$stateParams){
    var selfcapId2 = {id : $stateParams.subId};
    //获取值
    prepareSer.getFiveById(selfcapId2).then(function(response){
        if(response.data.code==0){
            $scope.peditInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
/*    prepareSer.getFiveById(selfcapId2).then(function(response){
        if(response.data.code==0){
            $scope.peditInfo = response.data.data;
          /!*  var o = {times:'class0'};
            for(key in $scope.data){
                o[key] = $scope.data[key];
            }
            $scope.rationdate.push(o);*!/
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });*/
    /*$scope.proportionTOList = [];
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
    };*/
  /*  $scope.basicEditFun = function(){
        var vm = $scope;
        var data = {};
        for(var i = 0;i<$scope.rationdate.length;i++){
            var o = $scope.rationdate[i];
            data['proportionTOList['+i + ']' + '.projectTeam'] = o.projectTeam;
            data['proportionTOList['+i + ']' + '.ratio'] = o.ratio;
            data['proportionTOList['+i + ']' + '.time'] = angular.element("."+o.times).val();
        }
        prepareSer.editDetailSelf(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.prepare.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };*/
});
