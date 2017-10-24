var app = angular.module('figureServer',[]);
app.factory('figureSer',function ($http) {
    return {
        // figureOper : figureOper,
        figureDay : figureDay,
        figureWeek : figureWeek,
        figureMonth : figureMonth,
        figurePermission:figurePermission,
        figureTotal : figureTotal,
        getYear:getYear,
        biddingdayfigure:biddingdayfigure,
        biddingweekfigure:biddingweekfigure,
        biddingmonthfigure:biddingmonthfigure,
        biddingtotalfigure:biddingtotalfigure,
        findfigureweek:findfigureweek,
    };
    //获取年份
    function getYear(data){
        return $http.get('/biddinginfo/getYear',{
            params: data
        })
    }

    //转正管理日汇总
    function figureDay(data){
        return $http.post('/figureDay/Day',data)
    }
    //转正管理周汇总
    function figureWeek(data){
        return $http.post('/figureWeek/Week',data)
    }
    //转正管理月汇总
    function figureMonth(data){
        return $http.post('/figureMonth/Month',data)
    }
    //转正管理累计汇总
    function figureTotal(data){
        return $http.post('/figureTotal/Total',data)
    }
    function figurePermission(data){
        return $http.get('/positPermission/permission/'+data);
    }
    function biddingdayfigure(data){
        return $http.get('/biddingcollectfigure/dayCollect',{params: data})
    }
    function biddingweekfigure(data){
        return $http.get('/biddingcollectfigure/weekCollect',{params: data})
    }
    function biddingmonthfigure(data){
        return $http.get('/biddingcollectfigure/monthCollect',{params: data})
    }
    function biddingtotalfigure(data){
        return $http.get('/biddingcollectfigure/totalCollect',{params: data})
    }
    function findfigureweek(data){
        return $http.get('/biddingfigurecollect/findfigureweek',{params: data})
    }
});
