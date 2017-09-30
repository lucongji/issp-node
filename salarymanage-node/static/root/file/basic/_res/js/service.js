var app = angular.module('basicServer',[]);
app.factory('basicSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        getAreaContent:getAreaContent,
        getDepartContent:getDepartContent,
        getHierarchyContent:getHierarchyContent,
        getPositionContent:getPositionContent
    };
    function menuPermission(data) {
        return $http.get('/basic/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/basic/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/basic/count')
    }
    function deleteContent(data){
        return $http.get('/basic/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/basic/add',data)
    }
    function getOneById(data) {
        return $http.get('/basic/getOneById',{params:data})
    }
    function editContent(data) {
        return $http.post('/basic/edit', data)
    }
    //获取所有地区
    function getAreaContent(){
        return $http.get('/basic/area')
    }
    //获取所有体系
    function getHierarchyContent(){
        return $http.get('/basic/hierarchy')
    }
    //获取所有部门
    function getDepartContent(){
        return $http.get('/basic/department')
    }
    //岗位
    function getPositionContent(){
        return $http.get('/basic/position')
    }
});
