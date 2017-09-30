var app = angular.module('programmeServer',[]);
app.factory('programmeSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        countCul:countCul
    };
    function menuPermission(data) {
        return $http.get('/programme/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/programme/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/programme/count')
    }
    function deleteContent(data){
        return $http.get('/programme/delete',{params:data})
    }
    //企业文化信息
    function countCul(){
        return $http.get('/countCul/cul')
    }
    function addContent(data){
        return $http.post('/programme/add',data)
    }
    function getOneById(data) {
        return $http.get('/programme/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/programme/edit',data)
    }
});
