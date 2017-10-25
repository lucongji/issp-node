var app = angular.module('time', ['toastr']);
app.controller('timeCtrl', function($scope, detailSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
    $scope.listNames = {};
    //获取ID
    detailSer.findDetailId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
            $scope.auditTime = $scope.editInfo.auditTime;
            $scope.listNames.countTime = $scope.editInfo.countTime;
            $scope.listNames.billTime = $scope.editInfo.billTime;
            $scope.listNames.planTime = $scope.editInfo.planTime;
            $scope.listNames.accountTime = $scope.editInfo.accountTime;
        }else{
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    $scope.myFunc = function() {
        var auditTime={
            auditTime:$scope.auditTime
        };
        detailSer.allAuditTime(auditTime).then(function(response){
            if(response.data.code == 0){
                $scope.listNames = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.myFunc2 = function() {
        var planTime={
            planTime:$scope.listNames.planTime
        };
        detailSer.allPlanTime(planTime).then(function(response){
            if(response.data.code == 0){
               var a = response.data.data;
                for(key in a){
                    for(b in $scope.listNames){
                        if(key == b){
                            $scope.listNames[b] = a[key];
                        }
                    }
                }
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.myFunc3 = function() {
        var countTime={
            countTime:$scope.listNames.countTime
        };
        detailSer.allERPTime(countTime).then(function(response){
            if(response.data.code == 0){
                var a = response.data.data;
                for(key in a){
                    for(b in $scope.listNames){
                        if(key == b){
                            $scope.listNames[b] = a[key];
                        }
                    }
                }
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.myFunc4= function() {
        var billTime={
            billTime:$scope.listNames.billTime
        };
        detailSer.allBillTime(billTime).then(function(response){
            if(response.data.code == 0){
                var a = response.data.data;
                for(key in a){
                    for(b in $scope.listNames){
                        if(key == b){
                            $scope.listNames[b] = a[key];
                        }
                    }
                }
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.settlementEditFun = function(){
        var vm = $scope;
        var data ={
            auditTime:vm.auditTime,
            id:vm.editInfo.id,
            countTime:angular.element('.countTime').val(),
            billTime:angular.element('.billTime').val(),
            planTime:angular.element('.planTime').val(),
            accountTime:angular.element('.accountTime').val(),
        };
          detailSer.editTime(data).then(function(response){
            if(response.data.code == 0){
                $scope.listNames = response.data.data;
                $state.go('root.payment.detail.list[12]');
                toastr.success( "编辑成功", '温馨提示');
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


