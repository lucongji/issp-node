var app = angular.module('figureOper', ['toastr']);
app.controller('figureOperCtrl', function($scope, figureSer,toastr){
    $scope.showed=true;
    $scope.figureshow = false;
    figureSer.getYear().then(function(response){

        if(response.data.code==0){
            $scope.year = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });


        $scope.getweek = function(){
            $scope.getweek2 = function(){
                $scope.sumweek = {
                    year : $scope.weekYear,
                    month : $scope.weekMonth,
                };
                figureSer.findfigureweek($scope.sumweek).then(function(response){
                    if(response.data.code == 0){
                        $scope.weeks = response.data.data;
                    } else {
                        toastr.error(response.data.msg, '温馨提示');
                    }
                });
            }
        }

    $scope.months=['1','2','3','4','5','6','7','8','9','10','11','12'];
    var getMonthWeek = function (a, b, c) {
        var date = new Date(a, parseInt(b) - 1, c), w = date.getDay(), d = date.getDate();
        return Math.ceil(
            (d + 6 - w) / 7
        );
    };
    today=new Date();//获取当前时间
    var nowyear = today.getFullYear();
    var y = today.getYear();
    var m = today.getMonth()+1;
    var d = today.getDate();
    getMonthWeek(y, m, d)
    var w = getMonthWeek(y, m, d)
    $scope.vm2 = {
        year: nowyear,
        month: m,
        week: w,
    }
    $scope.vm3 = {
        year: nowyear,
        month: m,

    }

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
    //转正管理日汇总
    figureSer.biddingdayfigure($scope.vm).then(function(response){
        if(response.data.code==0){
            $scope.figureDays =response.data.data;
            var myChart = echarts.init(document.getElementById('main'));
            var option1=$scope.figureDays;
            // option1.legend.bottom=20;
            // option1.title.x= 'center';
            // option1.grid={};
            // option1.grid.bottom='20%';
            myChart.setOption(option1);
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //转正管理周汇总
    figureSer.biddingweekfigure($scope.vm2).then(function(response){
        if(response.data.code==0){
            $scope.figureWeeks = response.data.data;
            var myChart = echarts.init(document.getElementById('main2'));
            var option2=$scope.figureWeeks;
            option2.legend.bottom=20;
            option2.title.x= 'center';
            option2.grid={};
            option2.grid.bottom='20%';
            myChart.setOption(option2);
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //转正管理月汇总
    figureSer.biddingmonthfigure($scope.vm3).then(function(response){
        if(response.data.code==0){
            $scope.figureMonths = response.data.data;
            var myChart = echarts.init(document.getElementById('main3'));
            var option3=$scope.figureMonths;
            option3.legend.bottom=20;
            option3.title.x= 'center';
            option3.grid={};
            option3.grid.bottom='20%';
            myChart.setOption(option3);
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //转正管理累计汇总
    figureSer.biddingtotalfigure($scope.vm).then(function(response){
        if(response.data.code==0){
            $scope.figureTotals = response.data.data;
            var myChart = echarts.init(document.getElementById('main4'));
            var option4=$scope.figureTotals;
            option4.legend.bottom=20;
            option4.title.x= 'center';
            option4.grid={};
            option4.grid.bottom='20%';
            myChart.setOption(option4);
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });











    //点击事件
    $scope.summary2 = function(){
        var vm = $scope;
        vm.sum={
            time:angular.element('.dayDay').val()
        };
        figureSer.biddingdayfigure(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.biddingdayfigure = response.data.data;
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main'));

                // 指定图表的配置项和数据
                var option1 = $scope.biddingdayfigure;
                option1.legend.bottom=20;
                option1.title.x= 'center';
                option1.grid={};
                option1.grid.bottom='20%';

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option1);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }


        })

    }
    $scope.summary3 = function(){
        var vm = $scope;
        vm.sum={
            year:angular.element('.weekYear').val(),
            month:angular.element('.weekMonth').val(),
            week:angular.element('.weekWeek').val()
        };
        figureSer.biddingweekfigure(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.biddingdayfigure = response.data.data;
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main2'));

                // 指定图表的配置项和数据
                var option2 = $scope.biddingdayfigure;
                option2.legend.bottom=20;
                option2.title.x= 'center';
                option2.grid={};
                option2.grid.bottom='20%';

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option2);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }


        })
    }
    $scope.summary4 = function(){
        var vm = $scope;
        vm.sum={
            year:angular.element('.monthYear').val(),
            month:angular.element('.monthMonth').val()
        };
        figureSer.biddingmonthfigure(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.biddingdayfigure = response.data.data;
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main3'));

                // 指定图表的配置项和数据
                var option3 = $scope.biddingdayfigure;
                option3.legend.bottom=20;
                option3.title.x= 'center';
                option3.grid={};
                option3.grid.bottom='20%';

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option3);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }


        })
    }
    $scope.summary5 = function(){
        var vm = $scope;
        vm.sum={
            time:angular.element('.totalDay').val()
        };
        figureSer.biddingtotalfigure(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.biddingdayfigure = response.data.data;
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main4'));

                // 指定图表的配置项和数据
                var option4 = $scope.biddingdayfigure;
                option4.legend.bottom=20;
                option4.title.x= 'center';
                option4.grid={};
                option4.grid.bottom='20%';

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option4);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }


        })
    }



});





