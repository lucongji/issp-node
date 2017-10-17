var app = angular.module('collectServer',[]);
app.factory('collectSer',function ($http) {
    return {
        // collectOper : collectOper,
        collectDay : collectDay,
        collectWeek : collectWeek,
        collectMonth : collectMonth,
        collectPermission:collectPermission,
        collectTotal : collectTotal,
        getYear:getYear,
    };
    //获取年份
    function getYear(data){

        return $http.get('/biddinginfo/getYear',{
            params: data

        })
    }
    // //操作日志汇总
    // function collectOper(data){
    //     return $http.post('/collectOper/Oper',data)
    // }
    //转正管理日汇总
    function collectDay(data){
        return $http.post('/collectDay/Day',data)
    }
    //转正管理周汇总
    function collectWeek(data){
        return $http.post('/collectWeek/Week',data)
    }
    //转正管理月汇总
    function collectMonth(data){
        return $http.post('/collectMonth/Month',data)
    }
    //转正管理累计汇总
    function collectTotal(data){
        return $http.post('/collectTotal/Total',data)
    }
    function collectPermission(data){
        return $http.get('/positPermission/permission/'+data);
    }
});
