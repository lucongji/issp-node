var app = angular.module('areaWeekServer',[]);
app.factory('areaWeekSer',function ($http) {
    return {
        listAreaWeek : listAreaWeek,
        countAreaWeek:countAreaWeek,
        addAreaWeek:addAreaWeek,
        getAreaWeek:getAreaWeek,
        editAreaWeek:editAreaWeek,
        deleteAreaWeek:deleteAreaWeek,
        whereName:whereName,
        fourthBynameSum:fourthBynameSum,
        fourthArea4:fourthArea4,
        menuPermission:menuPermission,
        warningCostProjects:warningCostProjects,
    };
    function listAreaWeek(data) {
        return $http.get('/listAreaWeek/list',{params:data})
    }
    function countAreaWeek() {
        return $http.get('/countAreaWeek/count')
    }
    function addAreaWeek(data) {
        return $http.post('/addAreaWeek/add',data)
    }
    function getAreaWeek(data) {
        return $http.get('/getAreaWeek/id',{params:data})
    }
    function editAreaWeek(data) {
        return $http.post('/editAreaWeek/edit',data)
    }
    function deleteAreaWeek(data) {
        return $http.get('/deleteAreaWeek/del',{params:data})
    }
    //查询所有地区
    function  whereName() {
        return $http.get('/fourCol/sum')
    }
    //地区汇总
    function fourthBynameSum(data) {
        return $http.post('/foutSum/sum4',data)
     }
    //汇总
    function fourthArea4() {
        return $http.get('/area4Fourth/area')
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/areaWeek/guidePermission/'+data);
    }
    //预警
    function warningCostProjects() {
        return $http.get('/warning/id')
    }
});
