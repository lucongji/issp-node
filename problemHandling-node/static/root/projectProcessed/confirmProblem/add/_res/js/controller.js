var app = angular.module('confirmAdd', ['toastr','ipCookie']);
app.controller('confirmAddCtrl', function ($scope, confirmSer, $state, toastr,$location,ipCookie) {

    //添加
    $scope.resultAddFun = function () {
        var vm = $scope;
        vm.results.problemAcceptTime = angular.element('.addTime').val();
        vm.results.problemOccurrenceTime = angular.element('.occurrence').val();
        vm.results.problemSolveTime = angular.element('.solution').val();

        confirmSer.addResult(vm.results).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.projectProcessed.confirmProblem.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login';
                },2000)
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

    //可手填的下拉框
    $scope.changeSelect = function () {
        $scope.results.projectType = $scope.results.projectType1;
    };
    $scope.changeSelect2 = function () {
        $scope.results.problemObject = $scope.results.problemObject1;
    };

});




