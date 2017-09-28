var app = angular.module('wagesServer',[]);
app.factory('wagesSer',function ($http) {
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
        return $http.get('/wages/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/wages/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/wages/count')
    }
    function deleteContent(data){
        return $http.get('/wages/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/wages/add',data)
    }
    function getOneById(data) {
        return $http.get('/wages/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/wages/edit',data)
    }
});
