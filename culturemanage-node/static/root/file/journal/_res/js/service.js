var app = angular.module('journalServer',[]);
app.factory('journalSer',function ($http) {
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
        return $http.get('/journal/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/journal/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/journal/count')
    }
    function deleteContent(data){
        return $http.get('/journal/delete',{params:data})
    }
    //企业文化信息
    function countCul(){
        return $http.get('/journal/cul')
    }
    function addContent(data){
        return $http.post('/journal/add',data)
    }
    function getOneById(data) {
        return $http.get('/journal/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/journal/edit',data)
    }
});
