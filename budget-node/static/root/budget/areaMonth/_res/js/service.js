var app = angular.module('areaMonthServer',[]);
app.factory('areaMonthSer',function ($http) {
    return {
        listAreaMonth:listAreaMonth,
        countAreaMonth:countAreaMonth,
        newColl:newColl,
        nowSuAreCol:nowSuAreCol,
        allArea2:allArea2,
        listTheMonthArea:listTheMonthArea,
        menuPermission:menuPermission,
        warningCostProjects:warningCostProjects,
    };
    function listAreaMonth(data) {
        return $http.get('/listAreaMonth/list',{params:data})
    }
    function countAreaMonth() {
        return $http.get('/countAreaMonth/count')
    }
    //查询所有地区
    function  newColl() {
        return $http.get('/collNew/sum')
    }
    //地区汇总
    function nowSuAreCol(data) {
        return $http.post('/col2/area',data)
     }
    //汇总
    function allArea2() {
        return $http.get('/areaCollFas/fas')
    }
    //查询当月明细
    function listTheMonthArea(data) {
        return $http.get('/listTheMonthArea/aboutArea',{params:data})
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/areaMonth/guidePermission/'+data);
    }
    //预警
    function warningCostProjects() {
        return $http.get('/warning/id')
    }
});
