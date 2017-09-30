var app = angular.module('proportionAdd', ['toastr']);
app.controller('proportionAddCtrl', function($scope, proportionSer,$state,toastr){
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
        var data = {};
        for(var i = 0;i<$scope.rationdate.length;i++){
            var o = $scope.rationdate[i];
            data['proportionTOList['+i + ']' + '.projectTeam'] = o.projectTeam;
            data['proportionTOList['+i + ']' + '.ratio'] = o.ratio;
            data['proportionTOList['+i + ']' + '.time'] = angular.element("."+o.times).val();
        }
        proportionSer.addContent(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.proportion.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});











