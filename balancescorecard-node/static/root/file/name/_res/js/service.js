var app = angular.module('nameServer',[]);
app.factory('nameSer',function ($http) {
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
        return $http.get('/name/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/name/list',{
            params:data
        })
    }
    function countContent(data){
        return $http.get('/name/count',{params:data})
    }
    function deleteContent(data){
        return $http.get('/name/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/name/add',data)
    }
    function getOneById(data) {
        return $http.get('/name/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/name/edit',data)
    }
});
