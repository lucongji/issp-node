var app = angular.module('informServer',[]);
app.factory('informSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent:listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        publicityById:publicityById,
        planById:planById
    };
    function menuPermission(data) {
        return $http.get('/inform/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/inform/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/inform/count')
    }
    function deleteContent(data){
        return $http.get('/inform/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/inform/add',data)
    }
    function getOneById(data) {
        return $http.get('/inform/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/inform/edit',data)
    }
    //宣传方案信息
    function publicityById(data) {
        return $http.get('/inform/publicity',{params:data})
    }
    //刊物方案信息
    function planById(data) {
        return $http.get('/inform/planById',{params:data})
    }
});
