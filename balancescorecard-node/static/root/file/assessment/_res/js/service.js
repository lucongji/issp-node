var app = angular.module('assessmentServer',[]);
app.factory('assessmentSer',function ($http) {
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
        return $http.get('/assessment/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/assessment/list',{
            params:data
        })
    }
    function countContent(data){
        return $http.get('/assessment/count',{params:data})
    }
    function deleteContent(data){
        return $http.get('/assessment/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/assessment/add',data)
    }
    function getOneById(data) {
        return $http.get('/assessment/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/assessment/edit',data)
    }
});
