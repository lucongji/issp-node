var app = angular.module('departindexServer',[]);
app.factory('departindexSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        allYears:allYears,
        allDepartments:allDepartments,
        allName:allName,
        allType:allType,
        allDimension:allDimension,
        allAssessment:allAssessment,
        editMonthSelf:editMonthSelf
    };
    function menuPermission(data) {
        return $http.get('/departindex/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/departindex/list',{
            params:data
        })
    }
    function countContent(data){
        return $http.get('/departindex/count',{params:data})
    }
    function deleteContent(data){
        return $http.get('/departindex/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/departindex/add',data)
    }
    function getOneById(data) {
        return $http.get('/departindex/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/departindex/edit',data)
    }
    //获取所有年份
    function allYears(){
        return $http.get('/allYears/year')
    }
    //获取部门
    function allDepartments(){
        return $http.get('/allDepartments/depart')
    }
    function allName(){
        return $http.get('/allName/name')
    }
    // 指标类型
    function allType(){
        return $http.get('/allType/type')
    }
    //维度
    function allDimension(){
        return $http.get('/allDimension/dimension')
    }
    //考核方式
    function allAssessment(){
        return $http.get('/allAssessment/assessment')
    }
    //月份分解
    function editMonthSelf(data){
        return $http.post('/editMonthSelf/month',data)
    }
});
