var app = angular.module('recordServer',[]);
app.factory('recordSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
    };
    function menuPermission(data) {
        return $http.get('/record/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/record/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/record/count')
    }
    function deleteContent(data){
        return $http.get('/record/delete',{params:data})
    }
    function getOneById(data) {
        return $http.get('/record/getOneById',{params:data})
    }
});
