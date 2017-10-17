var app = angular.module('collectOper', ['toastr']);
app.controller('collectOperCtrl', function($scope, collectSer,toastr){
    $scope.showed=true;
    collectSer.getYear().then(function(response){

        if(response.data.code==0){
            $scope.year = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.months=['1','2','3','4','5','6','7','8','9','10','11','12'];
    $scope.weeks=['1','2','3','4'];
    function show(){
       var mydate = new Date();
       var str = "" + mydate.getFullYear() + "-";
       str += toDou(mydate.getMonth()+1) + "-";
       str += toDou(mydate.getDate());
       return str;
    }
    function toDou(num){
        return num<10?'0'+num:num;
    }
    
    $scope.vm={
        date:show()
    }
// 操作日志汇总
        collectSer.collectDay($scope.vm).then(function(response){
            if(response.data.code == 0){
                $scope.data1 = response.data.data;
                //----------------------主要的----------------------
                $scope.arr = [];
                var index = 0;
                var before = '';
                for(var i = 0;i < $scope.data1.length;i++){
                    if (i == 0){
                        $scope.arr[index] = {};
                        $scope.arr[index].name = $scope.data1[i].area;
                        $scope.arr[index].length = 1;
                    }
                    if(i !== 0){
                        if($scope.data1[i].area == before){
                            $scope.arr[index].length +=1;
                        }else if($scope.data1[i].area == '合计'){
                            $scope.data1[i].projectGroup=' ';
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = '合计';
                            $scope.arr[index].length = 1;
                        }else if($scope.data1[i].area != before){
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = $scope.data1[i].area;
                            $scope.arr[index].length = 1;
                        }else{
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = 1;
                            $scope.arr[index].length = 1;
                        }
                    }
                    before = $scope.data1[i].area;
                }
                for(var i=0;i<$scope.arr.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr[i].name=='' || typeof($scope.arr[i].name)=='undefined'){
                        $scope.arr[i-1].length+=$scope.arr[i].length;
                        $scope.arr.splice(i,1);
                        i=i-1;
                    }
                }
                //再次合并type
                $scope.arr13 = [];
                var index3 = 0;
                var before3 = '';
                for(var i = 0;i < $scope.arr.length;i++){
                    if (i == 0){
                        $scope.arr13[index3] = {};
                        $scope.arr13[index3].name3 = $scope.arr[i].name;
                        $scope.arr13[index3].length3 = $scope.arr[i].length;
                    }
                    if(i !== 0){
                        if($scope.arr[i].name == before3){
                            $scope.arr13[index3].length3 +=$scope.arr[i].length;;
                        }else if($scope.arr[i].name != before3){
                            index3 +=1;
                            $scope.arr13[index3] = {};
                            $scope.arr13[index3].name3 = $scope.arr[i].name;
                            $scope.arr13[index3].length3 = $scope.arr[i].length;;
                        }else{
                            index3 +=1;
                            $scope.arr13[index3] = {};
                            $scope.arr13[index3].name3 = 1;
                            $scope.arr13[index3].length3 = $scope.arr[i].length;;
                        }
                    }
                    before3 = $scope.arr[i].name;
                }
            //第二层
                $scope.arr12 = [];
                var index2 = 0;
                var before2 = '';
                for(var i = 0;i < $scope.data1.length;i++){
                    if (i == 0){
                        $scope.arr12[index2] = {};
                        $scope.arr12[index2].name2 = $scope.data1[i].department;
                        $scope.arr12[index2].length2 = 1;
                    }
                    if(i !== 0){
                        if($scope.data1[i].department == before2){
                            $scope.arr12[index2].length2 +=1;
                        }else if($scope.data1[i].department != before2){
                            index2 +=1;
                            $scope.arr12[index2] = {};
                            $scope.arr12[index2].name2 = $scope.data1[i].department;
                            $scope.arr12[index2].length2 = 1;
                        }else{
                            index2 +=1;
                            $scope.arr12[index2] = {};
                            $scope.arr12[index2].name2 = 1;
                            $scope.arr12[index2].length2 = 1;
                        }
                    }
                    before2 = $scope.data1[i].department;
                    // console.log(before2)
                }
                for(var i=0;i<$scope.arr12.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr12[i].name2=='' || typeof($scope.arr12[i].name2)=='undefined'){
                        $scope.arr12[i-1].length2+=$scope.arr12[i].length2;
                        $scope.arr12.splice(i,1);
                        i=i-1;
                    }
                }
                // console.log($scope.arr2);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
// 按照天数汇总
        collectSer.collectDay($scope.vm).then(function(response){
            if(response.data.code == 0){
                $scope.data2 = response.data.data;
                //----------------------主要的----------------------
                $scope.arr = [];
                var index = 0;
                var before = '';
                for(var i = 0;i < $scope.data2.length;i++){
                    if (i == 0){
                        $scope.arr[index] = {};
                        $scope.arr[index].name = $scope.data2[i].area;
                        $scope.arr[index].length = 1;
                    }
                    if(i !== 0){
                        if($scope.data2[i].area == before){
                            $scope.arr[index].length +=1;
                        }else if($scope.data2[i].area == '合计'){
                            $scope.data2[i].department=' ';
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = '合计';
                            $scope.arr[index].length = 1;
                        }else if($scope.data2[i].area != before){
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = $scope.data2[i].area;
                            $scope.arr[index].length = 1;
                        }else{
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = 1;
                            $scope.arr[index].length = 1;
                        }
                    }
                    before = $scope.data2[i].area;
                }
                for(var i=0;i<$scope.arr.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr[i].name=='' || typeof($scope.arr[i].name)=='undefined'){
                        $scope.arr[i-1].length+=$scope.arr[i].length;
                        $scope.arr.splice(i,1);
                        i=i-1;
                    }
                }
                //再次合并type
                $scope.arr23 = [];
                var index3 = 0;
                var before3 = '';
                for(var i = 0;i < $scope.arr.length;i++){
                    if (i == 0){
                        $scope.arr23[index3] = {};
                        $scope.arr23[index3].name3 = $scope.arr[i].name;
                        $scope.arr23[index3].length3 = $scope.arr[i].length;
                    }
                    if(i !== 0){
                        if($scope.arr[i].name == before3){
                            $scope.arr23[index3].length3 +=$scope.arr[i].length;;
                        }else if($scope.arr[i].name != before3){
                            index3 +=1;
                            $scope.arr23[index3] = {};
                            $scope.arr23[index3].name3 = $scope.arr[i].name;
                            $scope.arr23[index3].length3 = $scope.arr[i].length;;
                        }else{
                            index3 +=1;
                            $scope.arr23[index3] = {};
                            $scope.arr23[index3].name3 = 1;
                            $scope.arr23[index3].length3 = $scope.arr[i].length;;
                        }
                    }
                    before3 = $scope.arr[i].name;
                }
            //第二层
                $scope.arr22 = [];
                var index2 = 0;
                var before2 = '';
                for(var i = 0;i < $scope.data2.length;i++){
                    if (i == 0){
                        $scope.arr22[index2] = {};
                        $scope.arr22[index2].name2 = $scope.data2[i].department;
                        $scope.arr22[index2].length2 = 1;
                    }
                    if(i !== 0){
                        if($scope.data2[i].department == before2){
                            $scope.arr22[index2].length2 +=1;
                        }else if($scope.data2[i].department != before2){
                            index2 +=1;
                            $scope.arr22[index2] = {};
                            $scope.arr22[index2].name2 = $scope.data2[i].department;
                            $scope.arr22[index2].length2 = 1;
                        }else{
                            index2 +=1;
                            $scope.arr22[index2] = {};
                            $scope.arr22[index2].name2 = 1;
                            $scope.arr22[index2].length2 = 1;
                        }
                    }
                    before2 = $scope.data2[i].department;
                    // console.log(before2)
                }
                for(var i=0;i<$scope.arr22.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr22[i].name2=='' || typeof($scope.arr22[i].name2)=='undefined'){
                        $scope.arr22[i-1].length2+=$scope.arr22[i].length2;
                        $scope.arr22.splice(i,1);
                        i=i-1;
                    }
                }
                // console.log($scope.arr2);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
// 按照周数汇总
        collectSer.collectWeek($scope.vm).then(function(response){
            if(response.data.code == 0){
                $scope.data3 = response.data.data;
                //----------------------主要的----------------------
                $scope.arr = [];
                var index = 0;
                var before = '';
                for(var i = 0;i < $scope.data3.length;i++){
                    if (i == 0){
                        $scope.arr[index] = {};
                        $scope.arr[index].name = $scope.data3[i].area;
                        $scope.arr[index].length = 1;
                    }
                    if(i !== 0){
                        if($scope.data3[i].area == before){
                            $scope.arr[index].length +=1;
                        }else if($scope.data3[i].area == '合计'){
                            $scope.data3[i].department=' ';
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = '合计';
                            $scope.arr[index].length = 1;
                        }else if($scope.data3[i].area != before){
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = $scope.data3[i].area;
                            $scope.arr[index].length = 1;
                        }else{
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = 1;
                            $scope.arr[index].length = 1;
                        }
                    }
                    before = $scope.data3[i].area;
                }
                for(var i=0;i<$scope.arr.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr[i].name=='' || typeof($scope.arr[i].name)=='undefined'){
                        $scope.arr[i-1].length+=$scope.arr[i].length;
                        $scope.arr.splice(i,1);
                        i=i-1;
                    }
                }
                //再次合并type
                $scope.arr33 = [];
                var index3 = 0;
                var before3 = '';
                for(var i = 0;i < $scope.arr.length;i++){
                    if (i == 0){
                        $scope.arr33[index3] = {};
                        $scope.arr33[index3].name3 = $scope.arr[i].name;
                        $scope.arr33[index3].length3 = $scope.arr[i].length;
                    }
                    if(i !== 0){
                        if($scope.arr[i].name == before3){
                            $scope.arr33[index3].length3 +=$scope.arr[i].length;;
                        }else if($scope.arr[i].name != before3){
                            index3 +=1;
                            $scope.arr33[index3] = {};
                            $scope.arr33[index3].name3 = $scope.arr[i].name;
                            $scope.arr33[index3].length3 = $scope.arr[i].length;;
                        }else{
                            index3 +=1;
                            $scope.arr33[index3] = {};
                            $scope.arr33[index3].name3 = 1;
                            $scope.arr33[index3].length3 = $scope.arr[i].length;;
                        }
                    }
                    before3 = $scope.arr[i].name;
                }
            //第二层
                $scope.arr32 = [];
                var index2 = 0;
                var before2 = '';
                for(var i = 0;i < $scope.data3.length;i++){
                    if (i == 0){
                        $scope.arr32[index2] = {};
                        $scope.arr32[index2].name2 = $scope.data3[i].department;
                        $scope.arr32[index2].length2 = 1;
                    }
                    if(i !== 0){
                        if($scope.data3[i].department == before2){
                            $scope.arr32[index2].length2 +=1;
                        }else if($scope.data3[i].department != before2){
                            index2 +=1;
                            $scope.arr32[index2] = {};
                            $scope.arr32[index2].name2 = $scope.data3[i].department;
                            $scope.arr32[index2].length2 = 1;
                        }else{
                            index2 +=1;
                            $scope.arr32[index2] = {};
                            $scope.arr32[index2].name2 = 1;
                            $scope.arr32[index2].length2 = 1;
                        }
                    }
                    before2 = $scope.data3[i].department;
                    // console.log(before2)
                }
                for(var i=0;i<$scope.arr32.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr32[i].name2=='' || typeof($scope.arr32[i].name2)=='undefined'){
                        $scope.arr32[i-1].length2+=$scope.arr32[i].length2;
                        $scope.arr32.splice(i,1);
                        i=i-1;
                    }
                }
                // console.log($scope.arr2);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
// 按照月数汇总
        collectSer.collectMonth($scope.vm).then(function(response){
            if(response.data.code == 0){
                $scope.data4 = response.data.data;
                //----------------------主要的----------------------
                $scope.arr = [];
                var index = 0;
                var before = '';
                for(var i = 0;i < $scope.data4.length;i++){
                    if (i == 0){
                        $scope.arr[index] = {};
                        $scope.arr[index].name = $scope.data4[i].area;
                        $scope.arr[index].length = 1;
                    }
                    if(i !== 0){
                        if($scope.data4[i].area == before){
                            $scope.arr[index].length +=1;
                        }else if($scope.data4[i].area == '合计'){
                            $scope.data4[i].department=' ';
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = '合计';
                            $scope.arr[index].length = 1;
                        }else if($scope.data4[i].area != before){
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = $scope.data4[i].area;
                            $scope.arr[index].length = 1;
                        }else{
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = 1;
                            $scope.arr[index].length = 1;
                        }
                    }
                    before = $scope.data4[i].area;
                }
                for(var i=0;i<$scope.arr.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr[i].name=='' || typeof($scope.arr[i].name)=='undefined'){
                        $scope.arr[i-1].length+=$scope.arr[i].length;
                        $scope.arr.splice(i,1);
                        i=i-1;
                    }
                }
                //再次合并type
                $scope.arr43 = [];
                var index3 = 0;
                var before3 = '';
                for(var i = 0;i < $scope.arr.length;i++){
                    if (i == 0){
                        $scope.arr43[index3] = {};
                        $scope.arr43[index3].name3 = $scope.arr[i].name;
                        $scope.arr43[index3].length3 = $scope.arr[i].length;
                    }
                    if(i !== 0){
                        if($scope.arr[i].name == before3){
                            $scope.arr43[index3].length3 +=$scope.arr[i].length;;
                        }else if($scope.arr[i].name != before3){
                            index3 +=1;
                            $scope.arr43[index3] = {};
                            $scope.arr43[index3].name3 = $scope.arr[i].name;
                            $scope.arr43[index3].length3 = $scope.arr[i].length;;
                        }else{
                            index3 +=1;
                            $scope.arr43[index3] = {};
                            $scope.arr43[index3].name3 = 1;
                            $scope.arr43[index3].length3 = $scope.arr[i].length;;
                        }
                    }
                    before3 = $scope.arr[i].name;
                }
            //第二层
                $scope.arr42 = [];
                var index2 = 0;
                var before2 = '';
                for(var i = 0;i < $scope.data4.length;i++){
                    if (i == 0){
                        $scope.arr42[index2] = {};
                        $scope.arr42[index2].name2 = $scope.data4[i].department;
                        $scope.arr42[index2].length2 = 1;
                    }
                    if(i !== 0){
                        if($scope.data4[i].department == before2){
                            $scope.arr42[index2].length2 +=1;
                        }else if($scope.data4[i].department != before2){
                            index2 +=1;
                            $scope.arr42[index2] = {};
                            $scope.arr42[index2].name2 = $scope.data4[i].department;
                            $scope.arr42[index2].length2 = 1;
                        }else{
                            index2 +=1;
                            $scope.arr42[index2] = {};
                            $scope.arr42[index2].name2 = 1;
                            $scope.arr42[index2].length2 = 1;
                        }
                    }
                    before2 = $scope.data4[i].department;
                    // console.log(before2)
                }
                for(var i=0;i<$scope.arr42.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr42[i].name2=='' || typeof($scope.arr42[i].name2)=='undefined'){
                        $scope.arr42[i-1].length2+=$scope.arr42[i].length2;
                        $scope.arr42.splice(i,1);
                        i=i-1;
                    }
                }
                // console.log($scope.arr2);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
// 转正管理累计汇总
        collectSer.collectTotal($scope.vm).then(function(response){
            if(response.data.code == 0){
                $scope.data5 = response.data.data;
                //----------------------主要的----------------------
                $scope.arr = [];
                var index = 0;
                var before = '';
                for(var i = 0;i < $scope.data5.length;i++){
                    if (i == 0){
                        $scope.arr[index] = {};
                        $scope.arr[index].name = $scope.data5[i].area;
                        $scope.arr[index].length = 1;
                    }
                    if(i !== 0){
                        if($scope.data5[i].area == before){
                            $scope.arr[index].length +=1;
                        }else if($scope.data5[i].area == '合计'){
                            $scope.data5[i].department=' ';
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = '合计';
                            $scope.arr[index].length = 1;
                        }else if($scope.data5[i].area != before){
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = $scope.data5[i].area;
                            $scope.arr[index].length = 1;
                        }else{
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = 1;
                            $scope.arr[index].length = 1;
                        }
                    }
                    before = $scope.data5[i].area;
                }
                for(var i=0;i<$scope.arr.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr[i].name=='' || typeof($scope.arr[i].name)=='undefined'){
                        $scope.arr[i-1].length+=$scope.arr[i].length;
                        $scope.arr.splice(i,1);
                        i=i-1;
                    }
                }
                //再次合并type
                $scope.arr53 = [];
                var index3 = 0;
                var before3 = '';
                for(var i = 0;i < $scope.arr.length;i++){
                    if (i == 0){
                        $scope.arr53[index3] = {};
                        $scope.arr53[index3].name3 = $scope.arr[i].name;
                        $scope.arr53[index3].length3 = $scope.arr[i].length;
                    }
                    if(i !== 0){
                        if($scope.arr[i].name == before3){
                            $scope.arr53[index3].length3 +=$scope.arr[i].length;;
                        }else if($scope.arr[i].name != before3){
                            index3 +=1;
                            $scope.arr53[index3] = {};
                            $scope.arr53[index3].name3 = $scope.arr[i].name;
                            $scope.arr53[index3].length3 = $scope.arr[i].length;;
                        }else{
                            index3 +=1;
                            $scope.arr53[index3] = {};
                            $scope.arr53[index3].name3 = 1;
                            $scope.arr53[index3].length3 = $scope.arr[i].length;;
                        }
                    }
                    before3 = $scope.arr[i].name;
                }
            //第二层
                $scope.arr52 = [];
                var index2 = 0;
                var before2 = '';
                for(var i = 0;i < $scope.data5.length;i++){
                    if (i == 0){
                        $scope.arr52[index2] = {};
                        $scope.arr52[index2].name2 = $scope.data5[i].department;
                        $scope.arr52[index2].length2 = 1;
                    }
                    if(i !== 0){
                        if($scope.data5[i].department == before2){
                            $scope.arr52[index2].length2 +=1;
                        }else if($scope.data5[i].department != before2){
                            index2 +=1;
                            $scope.arr52[index2] = {};
                            $scope.arr52[index2].name2 = $scope.data5[i].department;
                            $scope.arr52[index2].length2 = 1;
                        }else{
                            index2 +=1;
                            $scope.arr52[index2] = {};
                            $scope.arr52[index2].name2 = 1;
                            $scope.arr52[index2].length2 = 1;
                        }
                    }
                    before2 = $scope.data5[i].department;
                    // console.log(before2)
                }
                for(var i=0;i<$scope.arr52.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr52[i].name2=='' || typeof($scope.arr52[i].name2)=='undefined'){
                        $scope.arr52[i-1].length2+=$scope.arr52[i].length2;
                        $scope.arr52.splice(i,1);
                        i=i-1;
                    }
                }
                // console.log($scope.arr2);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })











    $scope.summary1 = function(){
        var vm = $scope;
        vm.sum={
            date:angular.element('.day').val(),
            // year:angular.element('.year').val(),
            // // year:vm.year,
            // month:angular.element('.month').val(),
            // week:angular.element('.week').val()
        };
        // 操作日志汇总
        collectSer.collectDay(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.data1 = response.data.data;
                //----------------------主要的----------------------
                $scope.arr = [];
                var index = 0;
                var before = '';
                for(var i = 0;i < $scope.data1.length;i++){
                    if (i == 0){
                        $scope.arr[index] = {};
                        $scope.arr[index].name = $scope.data1[i].area;
                        $scope.arr[index].length = 1;
                    }
                    if(i !== 0){
                        if($scope.data1[i].area == before){
                            $scope.arr[index].length +=1;
                        }else if($scope.data1[i].area == '合计'){
                            $scope.data1[i].projectGroup=' ';
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = '合计';
                            $scope.arr[index].length = 1;
                        }else if($scope.data1[i].area != before){
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = $scope.data1[i].area;
                            $scope.arr[index].length = 1;
                        }else{
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = 1;
                            $scope.arr[index].length = 1;
                        }
                    }
                    before = $scope.data1[i].area;
                }
                for(var i=0;i<$scope.arr.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr[i].name=='' || typeof($scope.arr[i].name)=='undefined'){
                        $scope.arr[i-1].length+=$scope.arr[i].length;
                        $scope.arr.splice(i,1);
                        i=i-1;
                    }
                }
                //再次合并type
                $scope.arr13 = [];
                var index3 = 0;
                var before3 = '';
                for(var i = 0;i < $scope.arr.length;i++){
                    if (i == 0){
                        $scope.arr13[index3] = {};
                        $scope.arr13[index3].name3 = $scope.arr[i].name;
                        $scope.arr13[index3].length3 = $scope.arr[i].length;
                    }
                    if(i !== 0){
                        if($scope.arr[i].name == before3){
                            $scope.arr13[index3].length3 +=$scope.arr[i].length;;
                        }else if($scope.arr[i].name != before3){
                            index3 +=1;
                            $scope.arr13[index3] = {};
                            $scope.arr13[index3].name3 = $scope.arr[i].name;
                            $scope.arr13[index3].length3 = $scope.arr[i].length;;
                        }else{
                            index3 +=1;
                            $scope.arr13[index3] = {};
                            $scope.arr13[index3].name3 = 1;
                            $scope.arr13[index3].length3 = $scope.arr[i].length;;
                        }
                    }
                    before3 = $scope.arr[i].name;
                }
            //第二层
                $scope.arr12 = [];
                var index2 = 0;
                var before2 = '';
                for(var i = 0;i < $scope.data1.length;i++){
                    if (i == 0){
                        $scope.arr12[index2] = {};
                        $scope.arr12[index2].name2 = $scope.data1[i].department;
                        $scope.arr12[index2].length2 = 1;
                    }
                    if(i !== 0){
                        if($scope.data1[i].department == before2){
                            $scope.arr12[index2].length2 +=1;
                        }else if($scope.data1[i].department != before2){
                            index2 +=1;
                            $scope.arr12[index2] = {};
                            $scope.arr12[index2].name2 = $scope.data1[i].department;
                            $scope.arr12[index2].length2 = 1;
                        }else{
                            index2 +=1;
                            $scope.arr12[index2] = {};
                            $scope.arr12[index2].name2 = 1;
                            $scope.arr12[index2].length2 = 1;
                        }
                    }
                    before2 = $scope.data1[i].department;
                    // console.log(before2)
                }
                for(var i=0;i<$scope.arr12.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr12[i].name2=='' || typeof($scope.arr12[i].name2)=='undefined'){
                        $scope.arr12[i-1].length2+=$scope.arr12[i].length2;
                        $scope.arr12.splice(i,1);
                        i=i-1;
                    }
                }
                // console.log($scope.arr2);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
    $scope.summary2 = function(){
        var vm = $scope;
        vm.sum={
            date:angular.element('.Day').val(),
            // year:vm.year,
            // month:angular.element('.month').val(),
            // week:angular.element('.week').val()
        };
        // 按照天数汇总
        collectSer.collectDay(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.data2 = response.data.data;
                //----------------------主要的----------------------
                $scope.arr = [];
                var index = 0;
                var before = '';
                for(var i = 0;i < $scope.data2.length;i++){
                    if (i == 0){
                        $scope.arr[index] = {};
                        $scope.arr[index].name = $scope.data2[i].area;
                        $scope.arr[index].length = 1;
                    }
                    if(i !== 0){
                        if($scope.data2[i].area == before){
                            $scope.arr[index].length +=1;
                        }else if($scope.data2[i].area == '合计'){
                            $scope.data2[i].department=' ';
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = '合计';
                            $scope.arr[index].length = 1;
                        }else if($scope.data2[i].area != before){
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = $scope.data2[i].area;
                            $scope.arr[index].length = 1;
                        }else{
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = 1;
                            $scope.arr[index].length = 1;
                        }
                    }
                    before = $scope.data2[i].area;
                }
                for(var i=0;i<$scope.arr.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr[i].name=='' || typeof($scope.arr[i].name)=='undefined'){
                        $scope.arr[i-1].length+=$scope.arr[i].length;
                        $scope.arr.splice(i,1);
                        i=i-1;
                    }
                }
                //再次合并type
                $scope.arr23 = [];
                var index3 = 0;
                var before3 = '';
                for(var i = 0;i < $scope.arr.length;i++){
                    if (i == 0){
                        $scope.arr23[index3] = {};
                        $scope.arr23[index3].name3 = $scope.arr[i].name;
                        $scope.arr23[index3].length3 = $scope.arr[i].length;
                    }
                    if(i !== 0){
                        if($scope.arr[i].name == before3){
                            $scope.arr23[index3].length3 +=$scope.arr[i].length;;
                        }else if($scope.arr[i].name != before3){
                            index3 +=1;
                            $scope.arr23[index3] = {};
                            $scope.arr23[index3].name3 = $scope.arr[i].name;
                            $scope.arr23[index3].length3 = $scope.arr[i].length;;
                        }else{
                            index3 +=1;
                            $scope.arr23[index3] = {};
                            $scope.arr23[index3].name3 = 1;
                            $scope.arr23[index3].length3 = $scope.arr[i].length;;
                        }
                    }
                    before3 = $scope.arr[i].name;
                }
            //第二层
                $scope.arr22 = [];
                var index2 = 0;
                var before2 = '';
                for(var i = 0;i < $scope.data2.length;i++){
                    if (i == 0){
                        $scope.arr22[index2] = {};
                        $scope.arr22[index2].name2 = $scope.data2[i].department;
                        $scope.arr22[index2].length2 = 1;
                    }
                    if(i !== 0){
                        if($scope.data2[i].department == before2){
                            $scope.arr22[index2].length2 +=1;
                        }else if($scope.data2[i].department != before2){
                            index2 +=1;
                            $scope.arr22[index2] = {};
                            $scope.arr22[index2].name2 = $scope.data2[i].department;
                            $scope.arr22[index2].length2 = 1;
                        }else{
                            index2 +=1;
                            $scope.arr22[index2] = {};
                            $scope.arr22[index2].name2 = 1;
                            $scope.arr22[index2].length2 = 1;
                        }
                    }
                    before2 = $scope.data2[i].department;
                    // console.log(before2)
                }
                for(var i=0;i<$scope.arr22.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr22[i].name2=='' || typeof($scope.arr22[i].name2)=='undefined'){
                        $scope.arr22[i-1].length2+=$scope.arr22[i].length2;
                        $scope.arr22.splice(i,1);
                        i=i-1;
                    }
                }
                // console.log($scope.arr2);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
    $scope.summary3 = function(){
        var vm = $scope;
        vm.sum={
            // date:angular.element('.day').val(),
            year:angular.element('.year').val(),
            // year:vm.year,
            month:angular.element('.month').val(),
            week:angular.element('.week').val()
        };
        // 按照周数汇总
        collectSer.collectWeek(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.data3 = response.data.data;
                //----------------------主要的----------------------
                $scope.arr = [];
                var index = 0;
                var before = '';
                for(var i = 0;i < $scope.data3.length;i++){
                    if (i == 0){
                        $scope.arr[index] = {};
                        $scope.arr[index].name = $scope.data3[i].area;
                        $scope.arr[index].length = 1;
                    }
                    if(i !== 0){
                        if($scope.data3[i].area == before){
                            $scope.arr[index].length +=1;
                        }else if($scope.data3[i].area == '合计'){
                            $scope.data3[i].department=' ';
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = '合计';
                            $scope.arr[index].length = 1;
                        }else if($scope.data3[i].area != before){
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = $scope.data3[i].area;
                            $scope.arr[index].length = 1;
                        }else{
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = 1;
                            $scope.arr[index].length = 1;
                        }
                    }
                    before = $scope.data3[i].area;
                }
                for(var i=0;i<$scope.arr.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr[i].name=='' || typeof($scope.arr[i].name)=='undefined'){
                        $scope.arr[i-1].length+=$scope.arr[i].length;
                        $scope.arr.splice(i,1);
                        i=i-1;
                    }
                }
                //再次合并type
                $scope.arr33 = [];
                var index3 = 0;
                var before3 = '';
                for(var i = 0;i < $scope.arr.length;i++){
                    if (i == 0){
                        $scope.arr33[index3] = {};
                        $scope.arr33[index3].name3 = $scope.arr[i].name;
                        $scope.arr33[index3].length3 = $scope.arr[i].length;
                    }
                    if(i !== 0){
                        if($scope.arr[i].name == before3){
                            $scope.arr33[index3].length3 +=$scope.arr[i].length;;
                        }else if($scope.arr[i].name != before3){
                            index3 +=1;
                            $scope.arr33[index3] = {};
                            $scope.arr33[index3].name3 = $scope.arr[i].name;
                            $scope.arr33[index3].length3 = $scope.arr[i].length;;
                        }else{
                            index3 +=1;
                            $scope.arr33[index3] = {};
                            $scope.arr33[index3].name3 = 1;
                            $scope.arr33[index3].length3 = $scope.arr[i].length;;
                        }
                    }
                    before3 = $scope.arr[i].name;
                }
            //第二层
                $scope.arr32 = [];
                var index2 = 0;
                var before2 = '';
                for(var i = 0;i < $scope.data3.length;i++){
                    if (i == 0){
                        $scope.arr32[index2] = {};
                        $scope.arr32[index2].name2 = $scope.data3[i].department;
                        $scope.arr32[index2].length2 = 1;
                    }
                    if(i !== 0){
                        if($scope.data3[i].department == before2){
                            $scope.arr32[index2].length2 +=1;
                        }else if($scope.data3[i].department != before2){
                            index2 +=1;
                            $scope.arr32[index2] = {};
                            $scope.arr32[index2].name2 = $scope.data3[i].department;
                            $scope.arr32[index2].length2 = 1;
                        }else{
                            index2 +=1;
                            $scope.arr32[index2] = {};
                            $scope.arr32[index2].name2 = 1;
                            $scope.arr32[index2].length2 = 1;
                        }
                    }
                    before2 = $scope.data3[i].department;
                    // console.log(before2)
                }
                for(var i=0;i<$scope.arr32.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr32[i].name2=='' || typeof($scope.arr32[i].name2)=='undefined'){
                        $scope.arr32[i-1].length2+=$scope.arr32[i].length2;
                        $scope.arr32.splice(i,1);
                        i=i-1;
                    }
                }
                // console.log($scope.arr2);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
    $scope.summary4 = function(){
        var vm = $scope;
        vm.sum={
            // date:angular.element('.day').val(),
            // year:vm.year,
            year:angular.element('.Year').val(),
            month:angular.element('.Month').val(),
            // week:angular.element('.week').val()
        };
        // 按照月数汇总
        collectSer.collectMonth(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.data4 = response.data.data;
                //----------------------主要的----------------------
                $scope.arr = [];
                var index = 0;
                var before = '';
                for(var i = 0;i < $scope.data4.length;i++){
                    if (i == 0){
                        $scope.arr[index] = {};
                        $scope.arr[index].name = $scope.data4[i].area;
                        $scope.arr[index].length = 1;
                    }
                    if(i !== 0){
                        if($scope.data4[i].area == before){
                            $scope.arr[index].length +=1;
                        }else if($scope.data4[i].area == '合计'){
                            $scope.data4[i].department=' ';
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = '合计';
                            $scope.arr[index].length = 1;
                        }else if($scope.data4[i].area != before){
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = $scope.data4[i].area;
                            $scope.arr[index].length = 1;
                        }else{
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = 1;
                            $scope.arr[index].length = 1;
                        }
                    }
                    before = $scope.data4[i].area;
                }
                for(var i=0;i<$scope.arr.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr[i].name=='' || typeof($scope.arr[i].name)=='undefined'){
                        $scope.arr[i-1].length+=$scope.arr[i].length;
                        $scope.arr.splice(i,1);
                        i=i-1;
                    }
                }
                //再次合并type
                $scope.arr43 = [];
                var index3 = 0;
                var before3 = '';
                for(var i = 0;i < $scope.arr.length;i++){
                    if (i == 0){
                        $scope.arr43[index3] = {};
                        $scope.arr43[index3].name3 = $scope.arr[i].name;
                        $scope.arr43[index3].length3 = $scope.arr[i].length;
                    }
                    if(i !== 0){
                        if($scope.arr[i].name == before3){
                            $scope.arr43[index3].length3 +=$scope.arr[i].length;;
                        }else if($scope.arr[i].name != before3){
                            index3 +=1;
                            $scope.arr43[index3] = {};
                            $scope.arr43[index3].name3 = $scope.arr[i].name;
                            $scope.arr43[index3].length3 = $scope.arr[i].length;;
                        }else{
                            index3 +=1;
                            $scope.arr43[index3] = {};
                            $scope.arr43[index3].name3 = 1;
                            $scope.arr43[index3].length3 = $scope.arr[i].length;;
                        }
                    }
                    before3 = $scope.arr[i].name;
                }
            //第二层
                $scope.arr42 = [];
                var index2 = 0;
                var before2 = '';
                for(var i = 0;i < $scope.data4.length;i++){
                    if (i == 0){
                        $scope.arr42[index2] = {};
                        $scope.arr42[index2].name2 = $scope.data4[i].department;
                        $scope.arr42[index2].length2 = 1;
                    }
                    if(i !== 0){
                        if($scope.data4[i].department == before2){
                            $scope.arr42[index2].length2 +=1;
                        }else if($scope.data4[i].department != before2){
                            index2 +=1;
                            $scope.arr42[index2] = {};
                            $scope.arr42[index2].name2 = $scope.data4[i].department;
                            $scope.arr42[index2].length2 = 1;
                        }else{
                            index2 +=1;
                            $scope.arr42[index2] = {};
                            $scope.arr42[index2].name2 = 1;
                            $scope.arr42[index2].length2 = 1;
                        }
                    }
                    before2 = $scope.data4[i].department;
                    // console.log(before2)
                }
                for(var i=0;i<$scope.arr42.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr42[i].name2=='' || typeof($scope.arr42[i].name2)=='undefined'){
                        $scope.arr42[i-1].length2+=$scope.arr42[i].length2;
                        $scope.arr42.splice(i,1);
                        i=i-1;
                    }
                }
                // console.log($scope.arr2);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
    $scope.summary5 = function(){
        var vm = $scope;
        vm.sum={
            date:$scope.vm,
            // year:vm.year,
            // month:angular.element('.month').val(),
            // week:angular.element('.week').val()
        };
        console.log(vm.sum)
        // 转正管理累计汇总
        collectSer.collectTotal(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.data5 = response.data.data;
                //----------------------主要的----------------------
                $scope.arr = [];
                var index = 0;
                var before = '';
                for(var i = 0;i < $scope.data5.length;i++){
                    if (i == 0){
                        $scope.arr[index] = {};
                        $scope.arr[index].name = $scope.data5[i].area;
                        $scope.arr[index].length = 1;
                    }
                    if(i !== 0){
                        if($scope.data5[i].area == before){
                            $scope.arr[index].length +=1;
                        }else if($scope.data5[i].area == '合计'){
                            $scope.data5[i].department=' ';
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = '合计';
                            $scope.arr[index].length = 1;
                        }else if($scope.data5[i].area != before){
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = $scope.data5[i].area;
                            $scope.arr[index].length = 1;
                        }else{
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = 1;
                            $scope.arr[index].length = 1;
                        }
                    }
                    before = $scope.data5[i].area;
                }
                for(var i=0;i<$scope.arr.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr[i].name=='' || typeof($scope.arr[i].name)=='undefined'){
                        $scope.arr[i-1].length+=$scope.arr[i].length;
                        $scope.arr.splice(i,1);
                        i=i-1;
                    }
                }
                //再次合并type
                $scope.arr53 = [];
                var index3 = 0;
                var before3 = '';
                for(var i = 0;i < $scope.arr.length;i++){
                    if (i == 0){
                        $scope.arr53[index3] = {};
                        $scope.arr53[index3].name3 = $scope.arr[i].name;
                        $scope.arr53[index3].length3 = $scope.arr[i].length;
                    }
                    if(i !== 0){
                        if($scope.arr[i].name == before3){
                            $scope.arr53[index3].length3 +=$scope.arr[i].length;;
                        }else if($scope.arr[i].name != before3){
                            index3 +=1;
                            $scope.arr53[index3] = {};
                            $scope.arr53[index3].name3 = $scope.arr[i].name;
                            $scope.arr53[index3].length3 = $scope.arr[i].length;;
                        }else{
                            index3 +=1;
                            $scope.arr53[index3] = {};
                            $scope.arr53[index3].name3 = 1;
                            $scope.arr53[index3].length3 = $scope.arr[i].length;;
                        }
                    }
                    before3 = $scope.arr[i].name;
                }
            //第二层
                $scope.arr52 = [];
                var index2 = 0;
                var before2 = '';
                for(var i = 0;i < $scope.data5.length;i++){
                    if (i == 0){
                        $scope.arr52[index2] = {};
                        $scope.arr52[index2].name2 = $scope.data5[i].department;
                        $scope.arr52[index2].length2 = 1;
                    }
                    if(i !== 0){
                        if($scope.data5[i].department == before2){
                            $scope.arr52[index2].length2 +=1;
                        }else if($scope.data5[i].department != before2){
                            index2 +=1;
                            $scope.arr52[index2] = {};
                            $scope.arr52[index2].name2 = $scope.data5[i].department;
                            $scope.arr52[index2].length2 = 1;
                        }else{
                            index2 +=1;
                            $scope.arr52[index2] = {};
                            $scope.arr52[index2].name2 = 1;
                            $scope.arr52[index2].length2 = 1;
                        }
                    }
                    before2 = $scope.data5[i].department;
                    // console.log(before2)
                }
                for(var i=0;i<$scope.arr52.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr52[i].name2=='' || typeof($scope.arr52[i].name2)=='undefined'){
                        $scope.arr52[i-1].length2+=$scope.arr52[i].length2;
                        $scope.arr52.splice(i,1);
                        i=i-1;
                    }
                }
                // console.log($scope.arr2);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
});





