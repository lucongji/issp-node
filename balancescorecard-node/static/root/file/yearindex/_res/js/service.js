var app = angular.module('yearindexServer',[]);
app.factory('yearindexSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        allYears:allYears,
        allName:allName,
        allType:allType,
        allDimension:allDimension,
        allDepartments:allDepartments,
        editDetailSelf:editDetailSelf
    };
    function menuPermission(data) {
        return $http.get('/yearindex/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/yearindex/list',{
            params:data
        })
    }
    function countContent(data){
        return $http.get('/yearindex/count',{params:data})
    }
    function deleteContent(data){
        return $http.get('/yearindex/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/yearindex/add',data)
    }
    function getOneById(data) {
        return $http.get('/yearindex/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/yearindex/edit',data)
    }
    //获取所有年份
    function allYears(){
        return $http.get('/allYears/year')
    }
    function allName(){
        return $http.get('/allName/name')
    }
    function allType(){
        return $http.get('/allType/type')
    }
    function allDimension(){
        return $http.get('/allDimension/dimension')
    }
    //获取部门
    function allDepartments(){
        return $http.get('/allDepartments/depart')
    }
    //指标分解
    function editDetailSelf(data){
        return $http.post('/editDetailSelf/depart',data)
    }
});
