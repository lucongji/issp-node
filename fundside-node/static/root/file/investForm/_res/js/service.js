var app = angular.module('investFormServer',[]);
app.factory('investFormSer',function ($http) {
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
        return $http.get('/investForm/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/investForm/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/investForm/count')
    }
    function deleteContent(data){
        return $http.get('/investForm/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/investForm/add',data)
    }
    function getOneById(data) {
        return $http.get('/investForm/getOneById',{params:data})
    }
    function editContent(data) {
        return $http.post('/investForm/edit', data)
    }
});
