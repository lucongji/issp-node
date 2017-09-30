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
    };
    function menuPermission(data) {
        return $http.get('/basic/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/basic/list',{
            params:data
        })
    }
    function countContent(data){
        return $http.get('/basic/count',{params:data})
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
    function editContent(data){
        return $http.post('/basic/edit',data)
    }
});
