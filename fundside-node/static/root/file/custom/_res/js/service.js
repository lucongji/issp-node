var app = angular.module('customServer',[]);
app.factory('customSer',function ($http) {
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
        return $http.get('/custom/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/custom/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/custom/count')
    }
    function deleteContent(data){
        return $http.get('/custom/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/custom/add',data)
    }
    function getOneById(data) {
        return $http.get('/custom/getOneById',{params:data})
    }
    function editContent(data) {
        return $http.post('/custom/edit', data)
    }
});
