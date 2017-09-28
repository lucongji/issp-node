var app = angular.module('postindexServer',[]);
app.factory('postindexSer',function ($http) {
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
        allpostindexset:allpostindexset,
        allpostindexCount:allpostindexCount
    };
    function menuPermission(data) {
        return $http.get('/postindex/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/postindex/list',{
            params:data
        })
    }
    function countContent(data){
        return $http.get('/postindex/count',{params:data})
    }
    function deleteContent(data){
        return $http.get('/postindex/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/postindex/add',data)
    }
    function getOneById(data) {
        return $http.get('/postindex/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/postindex/edit',data)
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
    function allpostindexset(data){
        return $http.get('/allpostindexset/monthNow',{params:data})
    }
    //月度指标总条数
    function allpostindexCount(){
        return $http.get('/allpostindexCount/countNow')
    }
});
