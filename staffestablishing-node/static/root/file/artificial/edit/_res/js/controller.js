var app = angular.module('artificialEdit', ['toastr']);
app.controller('artificialEditCtrl', function($scope, artificialSer,$state,toastr,$stateParams){
    $scope.lists = [];
    var companyId = {id : $stateParams.id};
    $scope.sonDetailTOs = [];
    $scope.rationdate = [];
    var arr = [];
    $scope.ss = [];
    $scope.sonTO = [];
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
    //获取值
    artificialSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
            $scope.sal1= $scope.editInfo.planSons;
            angular.forEach($scope.sal1,function(obj){
                $scope.sal=obj.sal;
                $scope.id=obj.id;
                var flag = 0;
                angular.forEach(obj.details,function(obj2,index){
                    if(index%4 == 0){
                        flag = 0;
                    }
                    switch (flag){
                        case 0:
                            $scope.lists[Math.floor(index/4)].a = obj2.content*1;
                            break;
                        case 1:
                            $scope.lists[Math.floor(index/4)].b = obj2.content*1;
                            break;
                        case 2:
                            $scope.lists[Math.floor(index/4)].c = obj2.content*1;
                            break;
                        case 3:
                            $scope.lists[Math.floor(index/4)].d = obj2.content*1;
                            break;
                    }
                    flag++;
                });
            });
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //薪资区间
    artificialSer.allSalary().then(function(response){
        if(response.data.code == 0){
            $scope.salaryData = response.data.data;
        }
    });
    //添加
    $scope.basicEditFun = function(){
        var vm = $scope;
        var lists = angular.copy($scope.lists);
        var data={
            time:angular.element('.time').val(),
            planExpend:vm.editInfo.planExpend,
            id:vm.editInfo.id
        };
        data['sonTO' + '.sal'] = $scope.sal;
        data['sonTO' + '.id'] = $scope.id;
        for(var     i = 0; i < arr.length;i++){
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
        artificialSer.editContent(data).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.file.artificial.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});











