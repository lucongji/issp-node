var app = angular.module('prepareServer',[]);
app.factory('prepareSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        firstSub:firstSub,
        secondSub:secondSub,
        fundetail:fundetail,
        collectWeek:collectWeek,
        collectMonth:collectMonth,
        collectYear:collectYear,
        collectProject:collectProject,
        getFiveById:getFiveById,
        editDetailSelf:editDetailSelf,
        collectAnalysis:collectAnalysis
    };
    function menuPermission(data) {
        return $http.get('/prepare/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/prepare/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/prepare/count')
    }
    function deleteContent(data){
        return $http.get('/prepare/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/prepare/add',data)
    }
    function getOneById(data) {
        return $http.get('/prepare/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/prepare/edit',data)
    }
    //一级科目
    function firstSub(){
        return $http.get('/firstSub/one')
    }
    //二级科目
    function secondSub(data){
        return $http.post('/secondSub/two',data)
    }
    //分配详情
    function fundetail(data){
        return $http.get('/fundetail/detail',{params:data})
    }
    //周汇总
    function collectWeek(){
        return $http.get('/collect/week')
    }
    //月汇总
    function collectMonth(){
        return $http.get('/collect/month')
    }
    //年汇总
    function collectYear(){
        return $http.get('/collect/year')
    }
    //项目分配汇总
    function collectProject(){
        return $http.get('/collect/project')
    }
    function getFiveById(data) {
        return $http.get('/collect/getFiveById',{
            params:data
        })
    }
    function editDetailSelf(data){
        return $http.post('/editDetailSelf/edit',data)
    }
    //对比分析
    function collectAnalysis(){
        return $http.get('/collect/analysis')
    }
});
