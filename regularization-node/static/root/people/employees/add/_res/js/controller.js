var app = angular.module('employAdd', ['toastr']);
app.controller('employAddCtrl', function ($scope, employSer, $state, toastr) {
    //获取姓名
    employSer.employAllGetPerson().then(function(response){
        if(response.data.code==0){
            $scope.names = response.data.data;
            // $scope.names=[{'username':'111'},{'username':'222'}]
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //根据姓名获取数据
    $scope.changSelect = function(){
        var obj={name:$scope.data.name};
        employSer.getNum(obj).then(function(response){
            if(response.data.code == 0){
                $scope.empNos= response.data.data;
            }
        });
    };
    //根据一堆
    $scope.changSelect2 = function(){
        var obj={name:$scope.data.name,empNo:$scope.data.empNo};
        employSer.getAll(obj).then(function(response){
            if(response.data.code == 0){
                $scope.data= response.data.data;
            }
        });
    };
    //获取地区
    employSer.employGitArea().then(function(response){
        if(response.data.code==0){
            $scope.areas = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取项目组
    employSer.employAllOrageDepartment().then(function(response){
        if(response.data.code==0){
            $scope.projectGroups = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取岗位
    employSer.employGitLeave().then(function(response){
        if(response.data.code==0){
            $scope.posts = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取决策层
    employSer.employAllGetPerson().then(function(response){
        if(response.data.code==0){
            $scope.decisionLevels = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取规划模块
    employSer.employAllGetPerson().then(function(response){
        if(response.data.code==0){
            $scope.planModules = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取预算模块
    employSer.employAllGetPerson().then(function(response){
        if(response.data.code==0){
            $scope.budgetModules = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取总经办
    employSer.employAllGetPerson().then(function(response){
        if(response.data.code==0){
            $scope.gmOffices = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.empAddFun = function () {
        if($scope.data.gender=="无"){
            $scope.data.gender="NONE"
        }else if($scope.data.gender=="男"){
            $scope.data.gender="MAN"
        }else if($scope.data.gender=="女"){
            $scope.data.gender="WOMAN"
        }
        var vm = $scope;
        // vm.data.gender = angular.element('.gender').val();
        // vm.data.hiredate = angular.element('.hiredate').val();
        // vm.data.posCriteriaConfirmed = angular.element('.posCriteriaConfirmed').val();
        vm.data.hiredate = angular.element('.hiredate').val();
        vm.data.regularDate = angular.element('.regularDate').val();
        employSer.employAdd(vm.data).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.people.employees.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




