var app = angular.module('informationAdd', ['toastr']);
app.controller('informationAddCtrl', function($scope, informationSer,$state,toastr){
     //管理层级
    $scope.myFun = function(){
        var data={id:$scope.add.employeeId};
        informationSer.manageSubject(data).then(function(response){
            if(response.data.code == 0){
                $scope.firstManage = response.data.data;
            }
        });
        informationSer.manageEntryBasic(data).then(function(response){
            if(response.data.code == 0){
                $scope.firstBasic = response.data.data[0];
            }
        });
        //转正时间
        informationSer.manageWorker(data).then(function(response){
            if(response.data.code == 0){
                $scope.firstWorker = response.data;
            }
        });
    };
    $scope.myFun3 = function(){
        var data3={employeeName:$scope.firstBasic.name};
        informationSer.attachedNameWorker(data3).then(function(response){
            if(response.data.code == 0){
                $scope.firstttached = response.data.data;
            }
        });
        informationSer.manageAge(data3).then(function(response){
            if(response.data.code == 0){
                $scope.firstAge = response.data.data;
            }
        });
    };
    $scope.myFun2 = function(){
        var data2={
            payStartTime:$scope.add.payStartTime,
            payEndTime:$scope.add.payEndTime,
        };
        informationSer.manageComputer(data2).then(function(response){
            if(response.data.code == 0){
                $scope.firstComputer = response.data.data;
            }
        });
       informationSer.manageHouse(data2).then(function(response){
            if(response.data.code == 0){
                $scope.firstHouse = response.data.data;
            }
        });
       informationSer.manageHot(data2).then(function(response){
            if(response.data.code == 0){
                $scope.firstHot = response.data.data;
            }
        });
     };
    $scope.basicAddFun = function(){
        var vm = $scope;
        var data={
            payStartTime:angular.element('.payStartTime').val(),
            payEndTime:angular.element('.payEndTime').val(),
            employeeId:vm.add.employeeId,
            area:vm.firstBasic.area,
            employeeName:vm.firstBasic.name,
            system:vm.add.system,
            section:vm.firstBasic.department,
            station:vm.firstBasic.position,
            stationLevel:vm.add.stationLevel,
            manageLevel:vm.firstManage.currentLevel,
            skill:vm.add.skill,
            proSkills:vm.add.proSkills,
            skillLevel:vm.add.skillLevel,
            hiredate:angular.element('.hiredate').val(),
            positiveTime:angular.element('.positiveTime').val(),
            basicSalary:vm.add.basicSalary,
            postSalary:vm.add.postSalary,
            skillPay:vm.add.skillPay,
            managePay:vm.add.managePay,
            skillSubsidies:vm.add.skillSubsidies,
            manageSubsidies:vm.add.manageSubsidies,
            seniorityLevSubsidies:vm.add.seniorityLevSubsidies,
            allSubsidies:vm.add.allSubsidies,
            projectBenefits:vm.add.projectBenefits,
            wage:vm.add.wage,
            salary:vm.add.salary,
            computerSubsidies:vm.firstComputer.assistMoney,
            accommodationSubsidies:vm.firstHouse.money,
            senioritySubsidies:vm.firstAge.assisCondition,
            hyperthermiaSubsidies:vm.firstHot.moneyCondition,
            allSalary:vm.add.allSalary,
            jinpoCost:vm.firstttached.money,
            jinpoSubsidies:vm.add.jinpoSubsidies,
            utilities:vm.add.utilities,
            personTax:vm.add.personTax,
            allRewardScore:vm.add.allRewardScore,
            allRewardCost:vm.add.allRewardCost,
            attendanceDay:vm.add.attendanceDay,
            vacateDay:vm.add.vacateDay,
            absenteeismDay:vm.add.absenteeismDay,
            unfinishedTime:vm.add.unfinishedTime,
            normalOvertimeDay:vm.add.normalOvertimeDay,
            legalRestDay:vm.add.legalRestDay,
            legalOvertimeDay:vm.add.legalOvertimeDay,
            normalRestDay:vm.add.normalRestDay,
            restOvertimeDay:vm.add.restOvertimeDay,
            surplusOvertimeDay:vm.add.surplusOvertimeDay,
            offsetOvertime:vm.add.offsetOvertime,
            effectiveOvertime:vm.add.effectiveOvertime,
            weekDays:vm.add.weekDays,
            paidDay:vm.add.paidDay,
            workingTime:vm.add.workingTime,
        };
        informationSer.addContent(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.information.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});
app.directive('justDate', function() {
    return {
        require: '?ngModel',
        restrict: 'A',
        scope: {
            ngModel: '=',
            backFn: '&bf'
        },
        link: function(scope, element, attr, ngModel) {
            var _date = null,_config={};

            // 初始化参数
            _config = {
                elem: '#' + attr.id,
                format: attr.format != undefined && attr.format != '' ? attr.format : 'YYYY-MM-DD',
                choose:setViewValue
            };
            ngModel.$render = function() {
                element.val(ngModel.$viewValue || '');
            };
            element.on('click', function() {
                laydate(_config);
            });
            function setViewValue() {
                var val = element.val();
                ngModel.$setViewValue(val);
                scope.$apply(function(){
                    scope.backFn();
                })
            }
        }
    }
});

