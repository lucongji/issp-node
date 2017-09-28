var app = angular.module('investmentServer',[]);
app.factory('investmentSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        allInnerProject:allInnerProject,
        listProject:listProject
    };
    function menuPermission(data) {
        return $http.get('/investment/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/investment/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/investment/count')
    }
    function deleteContent(data){
        return $http.get('/investment/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/investment/add',data)
    }
    function getOneById(data) {
        return $http.get('/investment/getOneById',{params:data})
    }
    function editContent(data) {
        return $http.post('/investment/edit', data)
    }
    //内部项目名称
    function allInnerProject(){
        return $http.get('/investment/allInnerProject')
    }
    //获取信息
    function listProject(data) {
        return $http.get('/investment/listProject',{
            params:data
        })
    }
});
