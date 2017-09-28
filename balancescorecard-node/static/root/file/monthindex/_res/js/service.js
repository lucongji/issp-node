var app = angular.module('monthindexServer',[]);
app.factory('monthindexSer',function ($http) {
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
        allndexset:allndexset,
        editPostSelf:editPostSelf,
        allndexsetCount:allndexsetCount
    };
    function menuPermission(data) {
        return $http.get('/monthindex/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/monthindex/list',{
            params:data
        })
    }
    function countContent(data){
        return $http.get('/monthindex/count',{params:data})
    }
    function deleteContent(data){
        return $http.get('/monthindex/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/monthindex/add',data)
    }
    function getOneById(data) {
        return $http.get('/monthindex/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/monthindex/edit',data)
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
    //月度指标列表
    function allndexset(data){
        return $http.get('/allAssessment/nowMonth',{params:data})
    }
    //月度指标总条数
    function allndexsetCount(){
        return $http.get('/allndexsetCount/nowCount')
    }
    //岗位分解
    function editPostSelf(data){
        return $http.post('/editPostSelf/jobs',data)
    }
});
