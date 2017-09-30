var app = angular.module('artificialAdd', ['toastr']);
app.controller('artificialAddCtrl', function($scope, artificialSer,$state,toastr){
    $scope.sonDetailTOs = [];
    $scope.rationdate = [];
    $scope.lists = [];
    var arr = [];
    $scope.ss = [];
    $scope.sonTO = [];
    //薪资区间
    artificialSer.allSalary().then(function(response){
        if(response.data.code == 0){
            $scope.salaryData = response.data.data;
        }
    });
    artificialSer.addContent2().then(function(response){
        if(response.data.code==0) {
            $scope.rationdate = response.data.data;
            angular.forEach($scope.rationdate,function(obj){
                $scope.sal3=obj.fieldVOs;
                angular.forEach($scope.sal3,function(obj4){
                    $scope.sal4=obj4.title;
                    $scope.ss.push($scope.sal4)
                });
            });
            for(var i = 0; i< $scope.rationdate.length;i++){
                var o = $scope.rationdate[i].fieldVOs;
                for(var j = 0; j < o.length;j++){
                    $scope.lists.push({});
                    var h = o[j].fieldVOs;
                    for(var n = 0;n < h.length;n++){
                        var val = h[n].titleIndex;
                        arr.push(val);
                    }
                }
            }
        }
    });
    //添加
    $scope.basicAddFun = function(){
        var vm = $scope;
        var lists = angular.copy($scope.lists);
        var data={
            time:angular.element('.time').val(),
            planExpend:vm.planExpend,
        };
        data['sonTO' + '.sal'] = $scope.sal;
        for(var i = 0; i < arr.length;i++){
            data['sonTO.'+'sonDetailTOs'+'['+i+'].'+'titleIndex'] = arr[i];
        }
        var flag= 0;
        for( var i = 0;i < lists.length;i++){
            var o = lists[i];
            for(key in o){
                data['sonTO.'+'sonDetailTOs'+'['+flag+'].'+'content'] = o[key];
                flag++;
             }
        }
        artificialSer.addContent(data).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.file.artificial.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});











