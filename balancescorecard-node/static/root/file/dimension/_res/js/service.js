var app = angular.module('dimensionServer',[]);
app.factory('dimensionSer',function ($http) {
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
        return $http.get('/dimension/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/dimension/list',{
            params:data
        })
    }
    function countContent(data){
        return $http.get('/dimension/count',{params:data})
    }
    function deleteContent(data){
        return $http.get('/dimension/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/dimension/add',data)
    }
    function getOneById(data) {
        return $http.get('/dimension/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/dimension/edit',data)
    }
});
