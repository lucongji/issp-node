var app = angular.module('libraryindexServer',[]);
app.factory('libraryindexSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        allYears:allYears,
        allDepartments:allDepartments,
        allName:allName,
        allType:allType,
        allDimension:allDimension,
        allAssessment:allAssessment
    };
    function menuPermission(data) {
        return $http.get('/libraryindex/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/departindex/list',{
            params:data
        })
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
});
