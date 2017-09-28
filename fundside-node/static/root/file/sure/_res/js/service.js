var app = angular.module('sureServer',[]);
app.factory('sureSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
    };
    function menuPermission(data) {
        return $http.get('/sure/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/sure/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/sure/count')
    }
    function deleteContent(data){
        return $http.get('/sure/delete',{params:data})
    }
    function getOneById(data) {
        return $http.get('/sure/getOneById',{params:data})
    }
});
