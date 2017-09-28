var app = angular.module('proWeekServer',[]);
app.factory('proWeekSer',function ($http) {
    return {
        listProWeek : listProWeek,
        countProWeek:countProWeek,
        addProWeek:addProWeek,
        getProWeek:getProWeek,
        editProWeek:editProWeek,
        deleteProWeek:deleteProWeek,
        collSumSecond:collSumSecond,
        collAllNew2:collAllNew2,
        collFirst:collFirst,
        menuPermission:menuPermission,
        warningCostProjects:warningCostProjects,
    };
    function listProWeek(data) {
        return $http.get('/listProWeek/list',{params:data})
    }
    function countProWeek() {
        return $http.get('/countProWeek/count')
    }
    function addProWeek(data) {
        return $http.post('/addProWeek/add',data)
    }
    function getProWeek(data) {
        return $http.get('/getProWeek/id',{params:data})
    }
    function editProWeek(data) {
        return $http.post('/editProWeek/edit',data)
    }
    function deleteProWeek(data) {
        return $http.get('/deleteProWeek/del',{params:data})
    }
    //查询所有项目
    function  collFirst() {
        return $http.get('/firstColl/first')
    }
    //项目汇总
    function collSumSecond(data) {
        return $http.post('/secondSummary/pro',data)
     }
    //汇总
    function collAllNew2() {
        return $http.get('/newAllOk/content')
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/proWeek/guidePermission/'+data);
    }
    //预警
    function warningCostProjects() {
        return $http.get('/warning/id')
    }
 });
